export function useScrollAnimation(heroSelector: string) {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })

    const hero = document.querySelector(heroSelector)
    if (hero) {
      const heroTargets = hero.querySelectorAll(':scope > .container > .row > [class*="col"]')
      heroTargets.forEach((el, i) => {
        el.classList.add('fade-up')
        ;(el as HTMLElement).style.setProperty('--stagger', String(i))
      })
      requestAnimationFrame(() => requestAnimationFrame(() => {
        heroTargets.forEach(el => el.classList.add('in-view'))
      }))
    }

    document.querySelectorAll(`section:not(${heroSelector})`).forEach(section => {
      const targets = section.querySelectorAll(
        ':scope > .container > *,' +
        ':scope > .container > .row > [class*="col"],' +
        ':scope > *:not(.container)'
      )
      targets.forEach((el, i) => {
        el.classList.add('fade-up')
        ;(el as HTMLElement).style.setProperty('--stagger', String(i))
        observer.observe(el)
      })
    })

    document.querySelectorAll('[data-scroll]').forEach((el, i) => {
      el.classList.add('fade-up')
      ;(el as HTMLElement).style.setProperty('--stagger', String(i))
      observer.observe(el)
    })
  })
}
