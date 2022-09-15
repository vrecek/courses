import React from 'react'
import { ICodeText } from '../../../interfaces/CoursePageInterfaces'

const CodeText = ({children, asSpan, color}: ICodeText) => {
   const styles: React.CSSProperties = {
      fontWeight: '600',
      color: color ?? '#404040',
      wordSpacing: '2px',
      fontSize: '1.1rem',
      lineHeight: '2em'
   }

   return (
      asSpan 

      ?

      <span style={styles} className='code-text span'>
         {children}
      </span>

      :

      <p style={styles} className="code-text p">
         {children}
      </p>
   )
}

export default CodeText