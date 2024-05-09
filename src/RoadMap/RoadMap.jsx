import React from 'react'
import './RoadMap.css'
import { CompanyCard } from '../Components/Compnents'

export default function RoadMap() {
  return (
    <>
      <section className="roadmap-container">
        <div className="roadmap-bg">
          <img className='roadmap-1' src="./Hero-child.png" alt="" />
          <img className='roadmap-2' src="./Hero-child.png" alt="" />
          <img className='roadmap-3' src="./Hero-child.png" alt="" />
        </div>
        <div className="roadmap-content-container">
          <div className="roadmap-content">
            <h2 className='roadmap-header'>ROADMAP 2024</h2>

            <div className="map-container">
              <div className="map1">
                <div className="box-map start-1"><div className="box-map-green-dot"></div>
                  <div className="box-map-box">
                    Launch
                    PancakeSwap
                  </div></div>
                <div className="box-map"><div className="box-map-green-dot"></div>
                  <div className="box-map-box">
                    Skeleton
                    Audit
                  </div></div>
                <div className="box-map"><div className="box-map-green-dot"></div>
                  <div className="box-map-box">
                    Moontok
                    Listing
                  </div></div>
                <div className="box-map"><div className="box-map-green-dot"></div>
                  <div className="box-map-box">
                    NTM
                    Listing
                  </div></div>
                <div className="box-map end-1"><div className="box-map-green-dot"></div>
                  <div className="box-map-box">
                    Aveai
                    Listing
                  </div></div>
              </div>
              <div className="map2">
                <div className="box-map start-2"><div className="box-map-green-dot"></div>
                  <div className="box-map-box">
                    Coingecko
                    Fast Track
                  </div></div>
                <div className="box-map"><div className="box-map-green-dot down"></div>
                  <div className="box-map-box">
                    Coinmarketcap
                    Fast Track
                  </div></div>
                <div className="box-map"><div className="box-map-green-dot down"></div>
                  <div className="box-map-box">
                    Dextools
                    Listing
                  </div></div>
                <div className="box-map"><div className="box-map-green-dot down"></div>
                  <div className="box-map-box">
                    Dexview
                    Listing
                  </div></div>
                <div className="box-map end-2"><div className="box-map-green-dot down"></div>
                  <div className="box-map-box">
                    Dexscreener
                    Listing
                  </div></div>
              </div>

              <div className="map2 down">
                <div className="box-map start-2"><div className="box-map-green-dot down"></div>
                  <div className="box-map-box">
                    CEX/DEX
                  </div></div>
                <div className="box-map"><div className="box-map-green-dot down"></div>
                  <div className="box-map-box">
                    Partnership/
                    Influencers/
                    Callers
                  </div></div>
                <div className="box-map"><div className="box-map-green-dot down"></div>
                  <div className="box-map-box">
                    Billboard/
                    Meeting/
                    AMA
                  </div></div>
                <div className="box-map"><div className="box-map-green-dot down"></div>
                  <div className="box-map-box">
                    Trending
                  </div></div>
                
              </div>
            </div>
            <div className="companycard-container">
              <CompanyCard text={'dextodoS'} />
              <CompanyCard text={'dextodoS'} />
              <CompanyCard text={'dextodoS'} />
              <CompanyCard text={'dextodoS'} />
              <CompanyCard text={'dextodoS'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
