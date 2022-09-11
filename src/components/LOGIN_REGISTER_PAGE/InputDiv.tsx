import React from 'react'
import { IDivInput } from '../../interfaces/LogRegInterfaces'

const InputDiv = ({type, placeholder, icon, cname}: IDivInput) => {
   return (
      <div className={`input ${cname ?? ''}`}>

         <input spellCheck='false' type={type} placeholder={placeholder} />
         {
            icon &&
            <span onClick={icon.action} className="input-icon">
               {icon.svg}
            </span>
         }

      </div>
   )
}

export default InputDiv