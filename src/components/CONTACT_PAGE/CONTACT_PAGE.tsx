import React from 'react'
import '../../css/Contact.css'
import ContactForm from './ContactForm'
import ContactText from './ContactText'

const CONTACT_PAGE = () => {
   return (
      <main className="contact">

         <ContactText />
         <ContactForm />

      </main>
   )
}

export default CONTACT_PAGE