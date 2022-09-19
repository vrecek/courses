import React from 'react'
import { AiOutlineNumber } from 'react-icons/ai'
import { MdUpdate } from 'react-icons/md'
import {TbWorld} from 'react-icons/tb'
import { IPlanDetails } from '../../interfaces/OrderPageInterfaces'

const Details = ({language, updatedDate, lessons}: IPlanDetails) => {
   const lessonsNum: number = lessons.reduce((p, c) => c.lessons.length + p, 0)

   return (
      <section className="details">

         <div>

            <span><TbWorld /></span>
            <h6>{language}</h6>

         </div>

         <div>

            <span><AiOutlineNumber /></span>
            <h6>{lessonsNum} lessons</h6>

         </div>

         <div>

            <span><MdUpdate /></span>
            <h6>{updatedDate}</h6>
            
         </div>

      </section>
   )
}

export default Details