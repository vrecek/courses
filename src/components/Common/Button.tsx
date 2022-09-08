import React, { CSSProperties } from 'react'
import { IButton } from '../../interfaces/CommonInterfaces'

const Button = ({ text, cname, additional, action }: IButton) => {
   const blank = ()=>{}
   const styles: CSSProperties = { pointerEvents: 'none' }
   
   return (
      <button onClick={ action ?? blank } className={ cname ?? '' }>

         <label style={ styles }>
            { text }
         </label>

         {
            additional && 
            <span style={ styles }>
               { additional }
            </span>
         }

      </button>
   )
}

export default Button