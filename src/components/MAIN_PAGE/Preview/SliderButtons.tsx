import React from 'react'

const SliderButtons = ({num}: {num: number}) => {
   const changeSlide = (e: React.MouseEvent, count: number): void => {
      const t: HTMLElement = e.target as HTMLElement
      const slider: HTMLElement = t.parentElement!.parentElement!.children[0].children[0] as HTMLElement
      const btns: Element[] = Array.from(t.parentElement!.children)

      for(let x of btns) x.className = ''
      t.className = 'active'
      
      slider.style.transform = `translateX(-${ count * 100 }%)`
   }
   
   return (
      <ul className="buttons">

         {
            [...Array(num)].map((x, i) => (
               <li className={i === 0 ? 'active' : ''} onClick={(e) => changeSlide(e, i)} key={i}>

               </li>
            ))
         }

      </ul>
   )
}

export default SliderButtons