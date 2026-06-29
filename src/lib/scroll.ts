// In-page section navigation that is safe under HashRouter.
//
// With HashRouter the URL hash *is* the route, so a plain `href="#about"`
// link is read as a route change (matching nothing) and never scrolls.
// These helpers scroll directly instead of mutating the hash.

export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Click handler for in-page anchors. Prevents the default hash jump
// (which would break the router) and smooth-scrolls to the target.
export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
) {
  e.preventDefault()
  scrollToId(id)
}
