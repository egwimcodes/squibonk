import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Tokenomics from './Tokenomics/Tokenomics'
import RoadMap from './RoadMap/RoadMap'
import SquibonkTeam from './SquibonkTeam/SquibonkTeam'
import Footer from './Footer/Footer'

function App() {

  return (
    <>
      
      <Header />
      <Tokenomics />
      <RoadMap />
      <SquibonkTeam />
      <Footer />
    </>
  )
}

export default App
