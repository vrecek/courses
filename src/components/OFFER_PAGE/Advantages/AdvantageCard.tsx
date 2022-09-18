import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { IAdvantage } from '../../../interfaces/OfferPageInterfaces'

const AdvantageCard = ({icon, header, para}: IAdvantage) => {
   return (
      <article className="card">

         <span className="icon">{icon}</span>

         <div>
            
            <h3>{header}</h3>
            <p>{para}</p>

         </div>

         <span className="icon plus"><AiOutlinePlus /></span>

      </article>
   )
}

export default AdvantageCard