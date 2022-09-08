import React from 'react'
import FirstSideInfo from './SideInformations/First/FirstSideInfo'
import Header from './Header/Header'
import SecondSideInfo from './SideInformations/Second/SecondSideInfo'

const MAIN_PAGE = () => {
   return (
      <main className="main-page">

         <Header />
         <FirstSideInfo />
         <SecondSideInfo />

      </main>
   )
}

export default MAIN_PAGE