import React from 'react'
import Button from '../../Common/Button'
import NewsletterText from './NewsletterText'

const Newsletter = () => {
   return (
      <section className="newsletter">

         <NewsletterText />
         <input type="text" placeholder='Your mail' />
         <Button text='Subscribe' />

      </section>
   )
}

export default Newsletter