import React from 'react'
import { IOfferBottom } from '../../../interfaces/OfferPageInterfaces'
import OfferRate from './OfferRate'

const BottomSection = ({header, rate, bottomText}: IOfferBottom) => {
   return (
      <section className="bottom">

         <div>

            <h4>{header}</h4>
            <p>{bottomText}</p>

         </div>

         <OfferRate rate={rate} />

      </section>
   )
}

export default BottomSection