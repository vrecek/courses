import React from 'react'
import FirstSideInfo from './SideInformations/First/FirstSideInfo'
import Header from './Header/Header'
import SecondSideInfo from './SideInformations/Second/SecondSideInfo'
import Pricing from './Pricing/Pricing'
import Preview from './Preview/Preview'
import Pros from './Pros/Pros'
import Opinions from './Opinions/Opinions'
import Usage from './Usage/Usage'

const MAIN_PAGE = () => {
   window.scrollTo(0, 0)
   
   return (
      <main className="main-page">

         <Header />
         <FirstSideInfo />
         <SecondSideInfo />
         <Pricing />
         <Preview />
         <Pros />
         <Usage />
         <Opinions />

      </main>
   )
}

export default MAIN_PAGE