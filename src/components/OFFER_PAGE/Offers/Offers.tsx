import React from 'react'
import Plans from '../../../data/Plans'
import OneOffer from './OneOffer'

const Offers = () => {
   return (
      <section className="offers">

         {
            Plans.map(x => (
               <OneOffer
                  rate={x.rate}
                  list={x.infoList}
                  bottomText={x.offerPagePara}
                  header={x.offerPageHeader}
                  key={x.id}
                  para={x.infoPara}
                  id={x.id}
                  price={x.price}
                  type={x.type}
               />
            ))
         }

      </section>
   )
}

export default Offers