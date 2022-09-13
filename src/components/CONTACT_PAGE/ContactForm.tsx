import React from 'react'
import Button from '../Common/Button'
import FigureImage from '../Common/FigureImage'
import ContactInput from './ContactInput'
import TextArea from './TextArea'
import contact from '../../images/contact.jpg'

const ContactForm = () => {
   const submitMsg = (e: React.FormEvent): void => {
      e.preventDefault()
   }

   return (
      <form onSubmit={submitMsg}>

         <FigureImage source={contact} altTxt='Background' />

         <ContactInput header='Username' />
         <ContactInput header='Mail' />
         <ContactInput header='Subject' />  
         <TextArea />

         <Button text='Submit' />

      </form>
   )
}

export default ContactForm