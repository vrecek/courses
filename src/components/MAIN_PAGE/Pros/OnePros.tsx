import React from 'react'
import { ICard } from '../../../interfaces/HomepageInterfaces'

const OnePros = ({icon, header, para}: ICard) => {
   return (
      <article>

         <span>{icon}</span>
         <h2>{header}</h2>
         <p>{para}</p>

      </article>
   )
}

export default OnePros