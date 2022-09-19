import React from 'react'
import { IPlan } from '../../interfaces/PlanInterface'
import Details from './Details'
import OrderList from './OrderList'

const Profits = ({plan}: {plan: IPlan}) => {
   const {language, lastUpdated} = plan.infoDetails

   return (
      <section className="profits">

         <div>

            <h2>You will immediately get access to:</h2>

            <OrderList list={plan.infoList} />

         </div>

         <Details lessons={plan.courseAside} language={language} updatedDate={lastUpdated} />

      </section>
   )
}

export default Profits