import React from 'react'
import '../../../css/Footer.css'
import BottomSection from './BottomSection'
import UpperSection from './UpperSection'

const Footer = () => {
   //1div - text i prawo ikony
   //2div - lista i newslet
   //newslet - nad txt, inp i btn
   return (
      <footer className="layout-footer">

         <UpperSection />
         <BottomSection />

      </footer>
   )
}

export default Footer