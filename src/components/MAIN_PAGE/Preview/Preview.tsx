import React from 'react'
import '../../../css/Preview.css'
import { IViewport } from '../../../interfaces/CommonInterfaces'
import Slider from './Slider'
import TextSection from './TextSection'

const Preview = ({forwardedRef, inViewport}: IViewport) => {
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
      <section ref={forwardedRef} className="preview">

         <TextSection />

         <Slider />

      </section>
   )
}

export default Preview