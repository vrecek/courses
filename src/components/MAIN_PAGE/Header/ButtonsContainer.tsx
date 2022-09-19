import React from 'react'
import Button from '../../Common/Button'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const ButtonsContainer = () => {
   const n: NavigateFunction = useNavigate()

   return (
      <div className="buttons-container">

         <Button action={() => n('/offer')} text='Explore offer' />

      </div>
   )
}

export default ButtonsContainer