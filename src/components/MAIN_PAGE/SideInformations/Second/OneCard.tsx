import React from 'react'
import { ICard } from '../../../../interfaces/HomepageInterfaces'

const OneCard = ({icon, header, para}: ICard) => {
   return (
      <div className="card">

         <div>

            <span className="card-icon">
               { icon }
            </span>

            <h3>{ header }</h3>

         </div>

         <p>{ para }</p>

      </div>
   )
}

export default OneCard