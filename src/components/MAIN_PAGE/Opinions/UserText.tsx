import React from 'react'
import { IOpinionText } from '../../../interfaces/HomepageInterfaces'

const UserText = ({header, text}: IOpinionText) => {
   return (
      <div className="text">

         <h3>{header}</h3>
         <p>{text}</p>   

      </div>
   )
}

export default UserText