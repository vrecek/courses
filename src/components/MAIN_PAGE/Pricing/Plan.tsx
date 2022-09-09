import React from 'react'
import { IPlan } from '../../../interfaces/HomepageInterfaces'
import Button from '../../Common/Button'
import PlanList from './PlanList'

const Plan = ({title, list, listHeader, price}: IPlan) => {
   return (
      <article className="plan">

         <div className="wrap top">

            <h2 className='title'>{title}</h2>

            <PlanList list={ list } header={listHeader} />  

         </div>


         <div className="wrap bottom">

            <h3 className="price">{price} $</h3>

            <Button text='Buy plan' />

         </div>

      </article>
   )
}

export default Plan