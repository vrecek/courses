import React from 'react'
import Plan from './Plan'
import '../../../css/Pricing.css'
import { IListType, IPlan } from '../../../interfaces/HomepageInterfaces'
import PricingInfo from './PricingInfo'

const Pricing = () => {
   const planList: IListType[][] = [
      [
         { text: 'Lorem dolor sit', type: 'active' },
         { text: 'Lorem dolor sit', type: 'active' },
         { text: 'Lorem dolor sit', type: 'inactive' },
         { text: 'Lorem dolor sit', type: 'inactive' },
         { text: 'Lorem dolor sit', type: 'inactive' },
         { text: 'Lorem dolor sit', type: 'inactive' },
      ],

      [
         { text: 'Lorem dolor sit', type: 'active' },
         { text: 'Lorem dolor sit', type: 'active' },
         { text: 'Lorem dolor sit', type: 'active' },
         { text: 'Lorem dolor sit', type: 'active' },
         { text: 'Lorem dolor sit', type: 'inactive' },
         { text: 'Lorem dolor sit', type: 'inactive' },
      ],

      [
         { text: 'Lorem dolor sit', type: 'active' },
         { text: 'Lorem dolor sit', type: 'active' },
         { text: 'Lorem dolor sit', type: 'active' },
         { text: 'Lorem dolor sit', type: 'active' },
         { text: 'Lorem dolor sit', type: 'active' },
         { text: 'Lorem dolor sit', type: 'active' },
      ],
   ]

   const planArray: IPlan[] = [
      {
         title: 'Beginner',
         list: planList[0],
         listHeader: 'For beginners, who are new to web experience',
         price: 999
      },

      {
         title: 'Intermediate',
         list: planList[1],
         listHeader: 'Good if you want expand your current knowledge',
         price: 999
      },

      {
         title: 'Exclusive',
         list: planList[2],
         listHeader: 'For those, who are looking for real knowledge',
         price: 999
      }
   ]

   return (
      <section className="pricing">

         <div className="bg"></div>

         <div className="main-container">

            <PricingInfo />

            <section className="container">

               {
                  planArray.map((x, i) => (
                     <Plan 
                        key={i}
                        title={x.title}
                        listHeader={x.listHeader}
                        price={x.price}
                        list={x.list}
                     />
                  ))
               }

            </section>

         </div>

      </section>
   )
}

export default Pricing