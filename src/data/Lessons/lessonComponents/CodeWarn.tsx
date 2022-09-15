import React from 'react'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'
import { IText } from '../../../interfaces/CoursePageInterfaces'

const CodeWarn = ({children}: IText) => {
   const sectionStyle: React.CSSProperties = {
      display: 'flex',
      margin: '3em 0'
   }

   const spanStyle: React.CSSProperties = {
      marginRight: '1em',
      width: '55px',
      height: '55px',
      color: 'gold'
   }

   const paraStyle: React.CSSProperties = {
      width: '75%',
      fontWeight: '500',
      borderBottom: '2px solid gold',
      paddingBottom: '.5em'
   }

   return (
      <section style={sectionStyle} className="code-warn">

         <span style={spanStyle} className="icon">

            <BsFillExclamationTriangleFill />

         </span>

         <p style={paraStyle}>

            {children}

         </p>

      </section>
   )
}

export default CodeWarn