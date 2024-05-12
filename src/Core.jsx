import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Tokenomics from './Tokenomics/Tokenomics'
import './App.css';

export default function Core() {
    return (
      
        <>
          <Navbar />
            <Header />
            <Tokenomics />
        {/* <Tokenomics />
        <RoadMap />
        <SquibonkTeam />
        <Footer /> */}
    </>
  )
}
