import React from 'react'
import {IPlanList} from '../../../interfaces/HomepageInterfaces'
import {TiTick, TiTimes} from 'react-icons/ti'

const PlanList = ({list, header}: IPlanList) => {
   return (
      <div className="wrap">

         <h4 className='list-info'>{header}</h4>

         <ul>

            {
               list.map((x, i) => (
                  <li className={x.type} key={i}>

                     <span>
                        {
                           x.type === 'active' ? <TiTick /> : <TiTimes />
                        }
                     </span>

                     {x.text}

                  </li>
               ))
            }

         </ul>

      </div>
   )
}

export default PlanList