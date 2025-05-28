"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Only scroll to top on pathname changes (not hash changes)
    // This ensures anchor links work properly while page navigation goes to top
    const handleRouteChange = () => {
      // Check if the current URL has a hash (anchor link)
      if (!window.location.hash) {
        window.scrollTo(0, 0)
      }
    }

    // Small delay to ensure the page has loaded
    const timer = setTimeout(handleRouteChange, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
