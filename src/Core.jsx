import './App.css';
import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Tokenomics from './Tokenomics/Tokenomics'
import RoadMap from './RoadMap/RoadMap'
import SquibonkTeam from './SquibonkTeam/SquibonkTeam'
import Footer from './Footer/Footer'

export default function Core() {
  return (
    <>
      <Navbar />
      <Header />
      <Tokenomics />
      <RoadMap />
      <SquibonkTeam />
      <Footer />
    </>
  )
}
