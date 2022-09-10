import React from 'react'
import {BiBookmarkAlt} from 'react-icons/bi'
import {BsCheckAll} from 'react-icons/bs'
import {TiCancel} from 'react-icons/ti'
import OnePros from './OnePros'

const ItemContainer = () => {
   const para1: string = 'Your progress will be automatically saved after completing any lesson or topic'
   const para2: string = 'Do you want to cancel your subscription? Cancel it whenever you want without additional payment'
   const para3: string = 'Every course is related to web developing and/or languages. You should know them all!'

   return (
      <section className="container">

         <OnePros para={para1} header='Save your progress' icon={<BiBookmarkAlt />} />
         <OnePros para={para2} header='Cancel whenever you want' icon={<TiCancel />} />
         <OnePros para={para3} header='Everything you need' icon={<BsCheckAll />} />

      </section>
   )
}

export default ItemContainer