import React from 'react'
import { IOffer } from '../../../interfaces/OfferPageInterfaces'
import BottomSection from './BottomSection'
import TopSection from './TopSection'

const OneOffer = ({type, price, id, rate, para, bottomText, header, list}: IOffer) => {
   return (
      <article className="one-offer">

         <TopSection list={list} para={para} id={id} type={type} price={price} />
         <BottomSection rate={rate} bottomText={bottomText} header={header} />

      </article>
   )
}

export default OneOffer