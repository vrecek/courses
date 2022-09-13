import React from 'react'
import '../../css/Offer.css'
import Advantages from './Advantages/Advantages'
import DiscountInfo from './DiscountInfo/DiscountInfo'
import Offers from './Offers/Offers'

const OFFER_PAGE = () => {
   window.scrollTo(0, 0)

   return (
      <main className="offer">

         <Offers />
         <Advantages />
         <DiscountInfo />

      </main>
   )
}

export default OFFER_PAGE