import React from 'react'
import '../../../css/Header.css'
import headerImg from '../../../images/header.jpg'
import FigureImage from '../../Common/FigureImage'
import HeaderText from './HeaderText'

const Header = () => {
   return (
      <header className="homepage-header">

         <FigureImage source={headerImg} altTxt='Header' />

         <HeaderText />

      </header>
   )
}

export default Header