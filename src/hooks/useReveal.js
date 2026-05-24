import { useEffect, useRef } from 'react'

/**
 * useReveal — attaches an IntersectionObserver to the returned ref,
 * adding the `.in` class to any `.reveal` children when they enter the viewport.
 */
export function useReveal(threshold = 0.08) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll('.reveal')
    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold }
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [threshold])

  return ref
}
