import React from 'react'
import './SquibonkTeam.css'
export default function SquibonkTeam() {
  return (
    <>
      <div className="squibonkteam-container">
        <div className="squibonkteam-content">
          <h2>
            SQUIBONK TEAM
          </h2>
          <div className="squibonkteam-content-list">
            <div className="squibonkteam-content-box">
              <div className="squibonkteam-content-box-card">
                <img src="./team1.png" alt="" />
              </div>
              <div className="team-writeup">
                <h4>SQUIBONK Dev:</h4>
                <span>
                  @Lexicadacc</span>
              </div>
            </div>
            <div className="squibonkteam-content-box">
              <div className="squibonkteam-content-box-card">
                <img src="./team2.png" alt="" />
              </div>
              <div className="team-writeup">
                <h4>SQUIBONK Dev:</h4>
                <span>
                  @Lexicadacc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
