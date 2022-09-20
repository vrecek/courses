import React from 'react'
import FirstSideInfo from './SideInformations/First/FirstSideInfo'
import Header from './Header/Header'
import SecondSideInfo from './SideInformations/Second/SecondSideInfo'
import Pricing from './Pricing/Pricing'
import Preview from './Preview/Preview'
import Pros from './Pros/Pros'
import Opinions from './Opinions/Opinions'
import Usage from './Usage/Usage'
import handleViewport from 'react-in-viewport'

const MAIN_PAGE = () => {
   window.scrollTo(0, 0)

   const VFirstSideInfo = handleViewport(FirstSideInfo)
   const VSecondSideInfo = handleViewport(SecondSideInfo)
   const VPreview = handleViewport(Preview)
   
   return (
      <main className="main-page">

         <Header />
         <VFirstSideInfo />
         <VSecondSideInfo />
         <Pricing />
         <VPreview />
         <Pros />
         <Usage />
         <Opinions />

      </main>
   )
}

export default MAIN_PAGE