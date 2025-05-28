interface SpamCheckData {
  email: string
  message: string
  ip?: string
  userAgent?: string
}

// Simple spam detection patterns
const SPAM_PATTERNS = [
  /\b(viagra|cialis|casino|lottery|winner|congratulations)\b/i,
  /\b(click here|free money|make money|work from home)\b/i,
  /\b(nigerian prince|inheritance|million dollars)\b/i,
  /(http[s]?:\/\/[^\s]+){3,}/i, // Multiple URLs
  /(.)\1{10,}/i, // Repeated characters
]

const SUSPICIOUS_DOMAINS = [
  "tempmail.org",
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "throwaway.email",
]

// Rate limiting storage (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; lastRequest: number }>()

export function checkSpam(data: SpamCheckData): { isSpam: boolean; reason?: string } {
  // Check for spam patterns in message
  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(data.message)) {
      return { isSpam: true, reason: "Suspicious content detected" }
    }
  }

  // Check for suspicious email domains
  const emailDomain = data.email.split("@")[1]?.toLowerCase()
  if (emailDomain && SUSPICIOUS_DOMAINS.includes(emailDomain)) {
    return { isSpam: true, reason: "Suspicious email domain" }
  }

  // Check message length (too short or too long)
  if (data.message.length < 10) {
    return { isSpam: true, reason: "Message too short" }
  }

  if (data.message.length > 5000) {
    return { isSpam: true, reason: "Message too long" }
  }

  // Check for excessive capitalization
  const capsRatio = (data.message.match(/[A-Z]/g) || []).length / data.message.length
  if (capsRatio > 0.7 && data.message.length > 20) {
    return { isSpam: true, reason: "Excessive capitalization" }
  }

  return { isSpam: false }
}

export function checkRateLimit(identifier: string, maxRequests = 3, windowMs = 60000): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(identifier)

  if (!record) {
    rateLimitStore.set(identifier, { count: 1, lastRequest: now })
    return true
  }

  // Reset if window has passed
  if (now - record.lastRequest > windowMs) {
    rateLimitStore.set(identifier, { count: 1, lastRequest: now })
    return true
  }

  // Check if limit exceeded
  if (record.count >= maxRequests) {
    return false
  }

  // Increment count
  record.count++
  record.lastRequest = now
  return true
}

// Clean up old rate limit records periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of rateLimitStore.entries()) {
    if (now - record.lastRequest > 300000) {
      // 5 minutes
      rateLimitStore.delete(key)
    }
  }
}, 60000) // Clean every minute
