import React from 'react'
import { BsFillChatQuoteFill } from 'react-icons/bs'
import { IOpinion } from '../../../interfaces/HomepageInterfaces'
import UserInfo from './UserInfo'
import UserRate from './UserRate'
import UserText from './UserText'

const Opinion = ({rate, opinion, user}: IOpinion) => {
   const {name, avatar, occupation} = user
   const {header, text} = opinion

   return (
      <article className="opinion">
         
         <span className="bg-icon">
            <BsFillChatQuoteFill />
         </span>

         <UserRate rate={rate} />
         <UserText header={header} text={text} />
         <UserInfo name={name} avatar={avatar} occupation={occupation} />

      </article>
   )
}

export default Opinion