import React from 'react'
import Button from '../../Common/Button'
import { scroller } from 'react-scroll'

const DiscountText = () => {
   return (
      <section className="discount-text">

         <h1>Lorem ipsum 50% dolor</h1>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veritatis nemo fugiat laborum numquam dolor maxime, mollitia doloremque expedita optio tempora hic beatae ipsa debitis quod cumque iste vel et?</p>
         <Button action={() => scroller.scrollTo('offers', {})} text='Back to offer' />

      </section>
   )
}

export default DiscountText