import React from 'react'
import { IText } from '../../../interfaces/CoursePageInterfaces'

const CodeHeader = ({children}: IText) => {
   const styles: React.CSSProperties = {
      fontWeight: '800',
      fontSize: '1.75rem',
      margin: '2em 0 1em 0',
      borderLeft: '3px solid royalblue',
      paddingLeft: '.25em'
   }

   return (
      <h2 style={styles} className="code-header">

         {children}

      </h2>
   )
}

export default CodeHeader