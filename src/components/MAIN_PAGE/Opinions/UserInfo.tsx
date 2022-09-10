import React from 'react'
import FigureImage from '../../Common/FigureImage'
import user from '../../../images/user.jpg'

const UserInfo = () => {
   return (
      <div className="user">

         <FigureImage source={user} altTxt='Avatar' />

         <div>

            <h4 className="name">Name Surname</h4>
            <h5 className="who">Occupation</h5>

         </div>

      </div>
   )
}

export default UserInfo