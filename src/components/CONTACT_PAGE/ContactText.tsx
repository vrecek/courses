import React from 'react'
import Socials from '../MAIN_PAGE/Preview/Socials'
import ContactInformations from './ContactInformations'
import ContactTextInfo from './ContactTextInfo'

const ContactText = () => {
   return (
      <article className="text">

         <ContactTextInfo />

         <div>

            <ContactInformations />
            <Socials />

         </div>

      </article>
   )
}

export default ContactText