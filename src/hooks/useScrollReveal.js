import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const content = document.getElementById('main-content')
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!content || motionPreference.matches || !('IntersectionObserver' in window)) {
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px 32px 0px' })

    const observeReveals = (node) => {
      if (!(node instanceof Element)) return
      if (node.matches('[data-reveal]') && !node.classList.contains('is-visible')) {
        observer.observe(node)
      }
      node.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((element) => observer.observe(element))
    }

    document.documentElement.classList.add('reveal-ready')
    observeReveals(content)

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(observeReveals))
    })
    mutationObserver.observe(content, { childList: true, subtree: true })

    const stopForReducedMotion = () => {
      if (motionPreference.matches) {
        document.documentElement.classList.remove('reveal-ready')
        observer.disconnect()
        mutationObserver.disconnect()
      }
    }
    motionPreference.addEventListener('change', stopForReducedMotion)

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
      motionPreference.removeEventListener('change', stopForReducedMotion)
      document.documentElement.classList.remove('reveal-ready')
    }
  }, [])
}
