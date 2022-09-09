import React from 'react'
import {GoArrowSmallUp} from 'react-icons/go'
import {IRef} from '../../interfaces/CommonInterfaces'
import '../../css/ArrowTop.css'

const ArrowTop = ({reference}: IRef) => {
   return (
      <div ref={reference} onClick={() => window.scrollTo(0, 0)} className="layout-arrow">

         <span>
            <GoArrowSmallUp />
         </span>

      </div>
   )
}

export default ArrowTop