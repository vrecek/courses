import React from 'react'
import '../../../css/Navigation.css'
import FigureImage from '../../Common/FigureImage'
import logo from '../../../images/logo.png'
import List from './List'

const Navigation = () => {
   return (
      <nav className="layout-navigation">

         <FigureImage source={logo} altTxt='Logo' cname='logo' />

         <List />

      </nav>
   )
}

export default Navigation