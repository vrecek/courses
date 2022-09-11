import React from 'react'
import { IDetails } from '../../interfaces/LogRegInterfaces'

const Informations = ({header, text}: IDetails) => {
   return (
      <section className="text">

         <h1>{header}</h1>
         <p>{text}</p>

      </section>
   )
}

export default Informations