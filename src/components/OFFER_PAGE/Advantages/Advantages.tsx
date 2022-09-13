import React from 'react'
import '../../../css/Advantages.css'
import AdvantageCard from './AdvantageCard'
import AdvantagesText from './AdvantagesText'

const Advantages = () => {
   return (
      <section className="advantages">

         <AdvantagesText />

         <section className="cards">

            <AdvantageCard />
            <AdvantageCard />
            <AdvantageCard />

         </section>

      </section>
   ) 
}

export default Advantages