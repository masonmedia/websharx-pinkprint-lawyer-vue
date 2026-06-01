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
      const textCol = hero.querySelector(':scope > .container > .row > [class*="col"]:first-child')
      const imgCol  = hero.querySelector(':scope > .container > .row > [class*="col"]:last-child')
      const heroTargets: Element[] = []
      if (textCol) heroTargets.push(...Array.from(textCol.children))
      if (imgCol)  heroTargets.push(imgCol)
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
