import React from 'react'
import { IText } from '../../../interfaces/CoursePageInterfaces'

const CodeImage = ({children}: IText) => {
   const imgStyle: React.CSSProperties = {
      width: '100%'
   }

   const figureStyle: React.CSSProperties = {
      width: '80%',
      margin: '2em auto'
   }

   return (
      <figure style={figureStyle} className="code-image">

         <img style={imgStyle} src={children} alt='Image' loading='lazy' />

      </figure>
   )
}

export default CodeImage