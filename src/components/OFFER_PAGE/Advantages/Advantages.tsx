import React from 'react'
import { AiFillUnlock } from 'react-icons/ai'
import { MdOutlineGppGood } from 'react-icons/md'
import { TiCancel } from 'react-icons/ti'
import '../../../css/Advantages.css'
import AdvantageCard from './AdvantageCard'
import AdvantagesText from './AdvantagesText'

const Advantages = () => {
   return (
      <section className="advantages">

         <AdvantagesText />

         <section className="cards">

            <AdvantageCard icon={<AiFillUnlock />} header='Get instant access' para='Get instant access to things you have bought. None of them will dissapear unless you decide to cancel your plan.' />
            <AdvantageCard icon={<TiCancel />} header='Cancel whenever you want' para='Cancel your subscription at any time, depending how many lessons have you passed' />
            <AdvantageCard icon={<MdOutlineGppGood />} header='Safe transaction' para='Your transaction is safe and encrypted, none of your credentials are endanger' />

         </section>

      </section>
   ) 
}

export default Advantages