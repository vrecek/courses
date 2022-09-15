import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../App'
import { PossibleUser } from '../../../interfaces/CommonInterfaces'
import { IHomepagePlan } from '../../../interfaces/HomepageInterfaces'
import Button from '../../Common/Button'
import PlanList from './PlanList'

const Plan = ({title, list, listHeader, price, id}: IHomepagePlan) => {
   const user: PossibleUser = React.useContext(UserContext)
   const n: NavigateFunction = useNavigate()

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
      <article className="plan">

         <div className="wrap top">

            <h2 className='title'>{title}</h2>

            <PlanList list={ list } header={listHeader} />  

         </div>


         <div className="wrap bottom">

            <h3 className="price">{price} $</h3>

            <Button action={buyPlan} text='Buy plan' />

         </div>

      </article>
   )
}

export default Plan