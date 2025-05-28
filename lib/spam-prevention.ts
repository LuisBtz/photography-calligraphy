interface SpamCheckData {
  email: string
  message: string
  ip?: string
  userAgent?: string
}

// Simple spam detection patterns - Made less aggressive
const SPAM_PATTERNS = [
  /\b(viagra|cialis|casino|lottery|winner|congratulations)\b/i,
  /\b(click here|free money|make money|work from home)\b/i,
  /\b(nigerian prince|inheritance|million dollars)\b/i,
  /(http[s]?:\/\/[^\s]+){5,}/i, // Multiple URLs (increased threshold)
  /(.)\1{15,}/i, // Repeated characters (increased threshold)
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
  // More lenient spam checking
  console.log("Checking spam for:", { email: data.email, messageLength: data.message.length })

  // Check for spam patterns in message
  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(data.message)) {
      console.log("Spam pattern detected:", pattern)
      return { isSpam: true, reason: "Suspicious content detected" }
    }
  }

  // Check for suspicious email domains
  const emailDomain = data.email.split("@")[1]?.toLowerCase()
  if (emailDomain && SUSPICIOUS_DOMAINS.includes(emailDomain)) {
    console.log("Suspicious domain detected:", emailDomain)
    return { isSpam: true, reason: "Suspicious email domain" }
  }

  // Check message length (more lenient)
  if (data.message.length < 5) {
    console.log("Message too short:", data.message.length)
    return { isSpam: true, reason: "Message too short" }
  }

  if (data.message.length > 10000) {
    console.log("Message too long:", data.message.length)
    return { isSpam: true, reason: "Message too long" }
  }

  // Check for excessive capitalization (more lenient)
  const capsRatio = (data.message.match(/[A-Z]/g) || []).length / data.message.length
  if (capsRatio > 0.8 && data.message.length > 50) {
    console.log("Excessive caps detected:", capsRatio)
    return { isSpam: true, reason: "Excessive capitalization" }
  }

  console.log("Spam check passed")
  return { isSpam: false }
}

export function checkRateLimit(identifier: string, maxRequests = 5, windowMs = 300000): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(identifier)

  console.log("Rate limit check for:", identifier, { maxRequests, windowMs })

  if (!record) {
    rateLimitStore.set(identifier, { count: 1, lastRequest: now })
    console.log("First request, allowing")
    return true
  }

  // Reset if window has passed
  if (now - record.lastRequest > windowMs) {
    rateLimitStore.set(identifier, { count: 1, lastRequest: now })
    console.log("Window expired, resetting count")
    return true
  }

  // Check if limit exceeded
  if (record.count >= maxRequests) {
    console.log("Rate limit exceeded:", record.count, ">=", maxRequests)
    return false
  }

  // Increment count
  record.count++
  record.lastRequest = now
  console.log("Request allowed, count:", record.count)
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
