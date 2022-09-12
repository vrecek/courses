import React from 'react'
import {ICard} from '../../interfaces/HomepageInterfaces'

const ContactDetail = ({icon, header, para}: ICard) => {
   return (
      <div className="detail">

         <span className="icon">
            {icon}
         </span>

         <div className="text">

            <h5>{header}</h5>
            <p>{para}</p>

         </div>

      </div>
   )
}

export default ContactDetail