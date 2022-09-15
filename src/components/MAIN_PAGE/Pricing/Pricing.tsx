import React from 'react'
import Plan from './Plan'
import '../../../css/Pricing.css'
import PricingInfo from './PricingInfo'
import Plans from '../../../data/Plans'

const Pricing = () => {
   return (
      <section className="pricing">

         <div className="bg"></div>

         <div className="main-container">

            <PricingInfo />

            <section className="container">

               {
                  Plans.map((x, i) => (
                     <Plan 
                        key={i}
                        id={x.id}
                        title={x.type}
                        listHeader={x.infoPara}
                        price={x.price}
                        list={x.infoList}
                     />
                  ))
               }

            </section>

         </div>

      </section>
   )
}

export default Pricing