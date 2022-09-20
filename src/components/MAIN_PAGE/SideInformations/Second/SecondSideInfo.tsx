import React from 'react'
import ImageDiv from '../ImageDiv'
import side2 from '../../../../images/side2.png'
import '../../../../css/SideInfo.css'
import SecondParagraph from './SecondParagraph'
import { IViewport } from '../../../../interfaces/CommonInterfaces'

const SecondSideInfo = ({forwardedRef, inViewport}: IViewport) => {
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
      <section ref={forwardedRef} className="side-info second">

         <ImageDiv source={ side2 } />
         <SecondParagraph />

      </section>
   )
}

export default SecondSideInfo