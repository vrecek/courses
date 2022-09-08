import React from 'react'
import { ISideParagraphTag } from '../../../interfaces/HomepageInterfaces'

const PTag = ({text, icon}: ISideParagraphTag) => {
   return (
      <p className='tag'>
         <span className="icon">{icon}</span>
         {text}
      </p>
   )
}

export default PTag