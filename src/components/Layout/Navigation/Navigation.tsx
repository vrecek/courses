import React from 'react'
import '../../../css/Navigation.css'
import FigureImage from '../../Common/FigureImage'
import logo from '../../../images/logo.png'
import List from './List'
import { IRef, Ref } from '../../../interfaces/CommonInterfaces'

const Navigation = ({reference}: IRef) => {
   return (
      <nav ref={reference} className="layout-navigation">

         <FigureImage source={logo} altTxt='Logo' cname='logo' />

         <List />

      </nav>
   )
}

export default Navigation