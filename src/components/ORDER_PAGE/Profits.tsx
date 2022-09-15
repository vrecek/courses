import React from 'react'
import { IHList } from '../../interfaces/PlanInterface'
import OrderList from './OrderList'

const Profits = ({list}: {list: IHList[]}) => {
   return (
      <section className="profits">

         <h2>You will immediately get access to:</h2>

         <OrderList list={list} />

      </section>
   )
}

export default Profits