import React from 'react'
import FigureImage from '../../Common/FigureImage'
import { IOpinionUser } from '../../../interfaces/HomepageInterfaces'

const UserInfo = ({name, avatar, occupation}: IOpinionUser) => {
   return (
      <div className="user">

         <FigureImage source={avatar} altTxt='Avatar' />

         <div>

            <h4 className="name">{name}</h4>
            <h5 className="who">{occupation}</h5>

         </div>

      </div>
   )
}

export default UserInfo