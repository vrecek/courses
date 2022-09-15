import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const OfferRate = ({rate}: {rate: number}) => {
   return (
      <div className="rate">

         <h5>{rate}</h5>
         <span><AiFillStar /></span>

      </div>
   )
}

export default OfferRate