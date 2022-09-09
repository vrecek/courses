const handleNavShow = (nav: HTMLElement): void => {
   nav.style.position = 'fixed'
   nav.style.transform = 'translateY(-100%)'

   setTimeout(() => {
      nav.style.transition = '.2s'
      nav.style.transform = 'translateY(0)'
   }, 5)
}
const handleNavHide = (nav: HTMLElement): void => {
   nav.style.transform = 'translateY(-100%)'

   setTimeout(() => {
      nav.style.transition = '0s'
      nav.style.position = 'absolute'
      nav.style.transform = 'translateY(0)'
   }, 200)
}

const handleArrow = (arrow: HTMLElement, hide: boolean): void => {
   arrow.style.opacity = hide ? '0' : '1'
   arrow.style.pointerEvents = hide ? 'none' : 'all'
}

const scrollAfter = (nav: HTMLElement, arrow: HTMLElement, y: number): void => {
   let scrolled: boolean = false

   window.addEventListener('scroll', () => {
      if(window.scrollY > y && !scrolled) {
         handleNavShow(nav)
         handleArrow(arrow, false)
         
         scrolled = true
      }

      else if(window.scrollY <= y && scrolled) {
         handleNavHide(nav)
         handleArrow(arrow, true)

         scrolled = false
      }
   })
}

export default scrollAfter