import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import ContactDetail from './ContactDetail'

const ContactInformations = () => {
   return (
      <section className="informations">

         <ContactDetail icon={<BsTelephoneFill />} header='Phone' para='102938475' />
         <ContactDetail icon={<GrMail />} header='Mail' para='loremispum1@mail.com' />

      </section>
   )
}

export default ContactInformations