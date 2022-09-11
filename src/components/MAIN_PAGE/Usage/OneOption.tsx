import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { HE } from '../../../interfaces/CommonInterfaces'
import { IOption } from '../../../interfaces/HomepageInterfaces'
import DivInformations from './DivInformations'

const OneOption = ({myDD, allDDs, id, imageToSet}: IOption) => {
   const toggleDisplay = (e: React.MouseEvent): void => {
      const t: HTMLElement = (e.target as HTMLElement).parentElement! as HTMLElement
      const restOptions: HTMLElement[] = 
      Array.from(t.parentElement!.children as HE)
      .filter(x => x.getAttribute('data-id') !== id.toString())


      if(restOptions.length !== allDDs.length) {
         throw new Error('Dropdown and elements length are different')
      }


      myDD.rotateArrow(t.children[0].children[1] as HTMLElement)
      myDD.switchActive()

      myDD.getActive 
      ? myDD.expandMenu(.3, t.children[1] as HTMLElement) 
      : myDD.shrinkMenu(.3, t.children[1] as HTMLElement)

      const image: HTMLImageElement = t.parentElement!.parentElement!.children[1].children[0].children[0] as HTMLImageElement
      image.src = imageToSet


      for(let i = 0; i < restOptions.length; i++) {
         if(!allDDs[i].getActive) continue

         allDDs[i].rotateArrow(restOptions[i].children[0].children[1] as HTMLElement)
         allDDs[i].switchActive()
         allDDs[i].shrinkMenu(.3, restOptions[i])
      }
   }

   return (
      <article data-id={id} className="option">

         <div onClick={toggleDisplay} className="wrap">

            <h2>Option lorem qcoinsqs</h2>
            <span><AiOutlineArrowDown /></span>

         </div>

         <DivInformations />

      </article>
   )
}

export default OneOption