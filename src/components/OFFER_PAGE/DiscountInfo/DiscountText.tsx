import React from 'react'
import Button from '../../Common/Button'
import { scroller } from 'react-scroll'

const DiscountText = () => {
   return (
      <section className="discount-text">

         <h1>All courses 50% off!</h1>
         <p>
            Look for a discounts of our courses. This is always a good reason to consider buying one of these if you want to be a master in a web developing.
         </p>
         <Button action={() => scroller.scrollTo('offers', {})} text='Back to offer' />

      </section>
   )
}

export default DiscountText