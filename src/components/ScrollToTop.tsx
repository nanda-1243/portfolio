import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to top on route change (and not when only the hash anchor changes
// within the same page).
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}
