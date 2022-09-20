import React from 'react'
import ImageDiv from '../ImageDiv'
import FirstParagraph from './FirstParagraph'
import side1 from '../../../../images/side1.gif'
import '../../../../css/SideInfo.css'
import { IViewport } from '../../../../interfaces/CommonInterfaces'

const FirstSideInfo = ({forwardedRef, inViewport}: IViewport) => {
   React.useEffect(() => {
      const c: HTMLElement = forwardedRef.current!
      
      if(inViewport) {
         const imgCont: HTMLElement = c.children[1] as HTMLElement
         const artCont: HTMLElement = c.children[0] as HTMLElement
         
         imgCont.style.transform = 'translateX(0)'
         artCont.style.transform = 'translateX(0)'
      }
   }, [inViewport])

   return (
      <section ref={forwardedRef} className="side-info first">

         <FirstParagraph />
         <ImageDiv source={ side1 } />

      </section>
   ) 
}

export default FirstSideInfo