import React from 'react'

const ContactInput = ({header}: {header: string}) => {
   return (
      <div className="input">

         <h6>{header}</h6>
         <input type="text" spellCheck='false' />

      </div>
   )
}

export default ContactInput