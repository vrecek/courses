import React from 'react'
import Button from '../../Common/Button'
import {scroller} from 'react-scroll'

const ButtonsContainer = () => {
   const offset = { offset: -60 }

   return (
      <div className="buttons-container">

         <Button action={() => scroller.scrollTo('pricing', offset)} text='Explore offer' />

      </div>
   )
}

export default ButtonsContainer