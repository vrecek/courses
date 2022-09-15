import React from 'react'
import { SiDiscourse } from 'react-icons/si'

const HeaderInfo = ({type}: {type: string}) => {
   return (
      <h1>
         
         <span><SiDiscourse /></span>
         {type} course
      
      </h1>
   )
}

export default HeaderInfo