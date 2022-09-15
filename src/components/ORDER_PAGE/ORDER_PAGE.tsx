import React from 'react'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import '../../css/Order.css'
import Plans from '../../data/Plans'
import { IOrderState } from '../../interfaces/OrderPageInterfaces'
import { IPlan } from '../../interfaces/PlanInterface'
import Confirm from './Confirm'
import Profits from './Profits'

const ORDER_PAGE = () => {
   window.scrollTo(0, 0)

   const n: NavigateFunction = useNavigate()
   const l: IOrderState = useLocation().state as IOrderState

   React.useEffect(() => {
      if(!l || l.id > 3) n('/', { replace: true })
   }, [])

   if(l && l?.id <= 3) {
      const plan: IPlan = Plans.filter(x => x.id === l.id)[0]

      return (
         <main className="order-page">
   
            <Confirm id={plan.id} para={plan.offerPagePara} price={plan.price} type={plan.type} />
            <Profits list={plan.infoList} />
   
         </main>
      )
   }

   return (<></>)
}

export default ORDER_PAGE