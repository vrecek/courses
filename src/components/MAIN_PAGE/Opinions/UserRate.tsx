import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const UserRate = ({rate}: {rate: number}) => {
   return (
      <div className="rating">

         {
            [...Array(5)].map((x, i) => (
               <span key={i} className={i < rate ? 'active' : ''}>
                  <AiFillStar />
               </span>
            ))
         }

      </div>
   )
}

export default UserRate