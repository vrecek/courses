import React from 'react'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'

const ExpandArrow = () => {
   const toggleAside = (e: React.MouseEvent): void => {
      const arrow: HTMLElement = e.target as HTMLElement
      const aside: HTMLElement = arrow.parentElement!.children[0] as HTMLElement
      
      aside.classList.toggle('active')

      if(aside.classList.contains('active')) {
         aside.style.transform = 'translateX(0)'
         arrow.style.transform = 'translateY(-50%) translateX(-100%) rotate(180deg)'
         arrow.style.left = '100%'

         return
      }

      aside.style.transform = 'translateX(-100%)'
      arrow.style.left = '0'
      arrow.style.transform = 'translateY(-50%) translateX(0) rotate(0)'
   }

   return (
      <span onClick={toggleAside} className="arrow-icon">

         <BsFillArrowRightSquareFill />

      </span>
   )
}

export default ExpandArrow