import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { IHList } from '../../interfaces/PlanInterface'

const OrderList = ({list}: {list: IHList[]}) => {
   list = list.filter(x => x.present)
   
   return (
      <ul>

         {
            list.map((x, i) => (
               <li key={i}>
                  <span><AiFillStar /></span>
                  <p>{x.name}</p>
               </li>
            ))
         }

      </ul>
   )
}

export default OrderList