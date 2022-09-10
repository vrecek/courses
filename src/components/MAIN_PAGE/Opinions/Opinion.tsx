import React from 'react'
import { BsFillChatQuoteFill } from 'react-icons/bs'
import UserInfo from './UserInfo'
import UserRate from './UserRate'
import UserText from './UserText'

const Opinion = () => {
   return (
      <article className="opinion">
         
         <span className="bg-icon">
            <BsFillChatQuoteFill />
         </span>

         <UserRate rate={4} />
         <UserText />
         <UserInfo />

      </article>
   )
}

export default Opinion