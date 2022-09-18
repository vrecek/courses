import React from 'react'
import '../../css/Contact.css'
import FigureImage from '../Common/FigureImage'
import ContactForm from './ContactForm'
import ContactText from './ContactText'
import contact from '../../images/contact.jpg'

const CONTACT_PAGE = () => {
   window.scrollTo(0, 0)
   
   return (
      <main className="contact">

         <FigureImage source={contact} altTxt='Background' />

         <ContactText />
         <ContactForm />

      </main>
   )
}

export default CONTACT_PAGE