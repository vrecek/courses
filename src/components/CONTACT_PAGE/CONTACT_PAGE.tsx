import React from 'react'
import '../../css/Contact.css'
import ContactForm from './ContactForm'
import ContactText from './ContactText'

const CONTACT_PAGE = () => {
   window.scrollTo(0, 0)
   
   return (
      <main className="contact">

         <ContactText />
         <ContactForm />

      </main>
   )
}

export default CONTACT_PAGE