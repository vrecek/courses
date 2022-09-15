import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../App'
import { PossibleUser } from '../../../interfaces/CommonInterfaces'
import { IOfferTop } from '../../../interfaces/OfferPageInterfaces'
import Button from '../../Common/Button'

const TopSection = ({price, type, id, para, list}: IOfferTop) => {
   const n: NavigateFunction = useNavigate()
   const user: PossibleUser = React.useContext(UserContext)

   const buyPlan = (): void => {
      if(!user) {
         n('/login')
         return
      }

      n('/finalize-order', { 
         state: {
            id,
            user,
         } 
      })
   }

   return (
      <section className="top">

         <div>
            <h2 className='what'>{type}</h2>
            <h3 className="price">{price} $</h3>
         </div>

         <p>{para}</p>
         <Button action={buyPlan} text='Buy now' />

      </section>
   )
}

export default TopSection