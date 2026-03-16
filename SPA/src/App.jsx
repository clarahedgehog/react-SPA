import { useState } from 'react'
import Header from './components/Header'
import BackgroundImage from './components/BackgroundImage'
import DestinationContainer from './components/DestinationContainer'
import TourPackagesContainer from './components/TourPackagesContainer'

function App() {


  return (
    <>
      <Header />
      <BackgroundImage />
      <DestinationContainer />
      <TourPackagesContainer />
    </>
  )
}

export default App
