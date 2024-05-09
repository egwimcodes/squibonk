import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
      <>
          <div className="footer-container">
              <div className="footer-content">
                  <hr />

                  <div className="footer-footer">
                      <img src="./nav-img.svg" alt="" />
                      <div className="social">
                          <div className="links">
                              <a href="">
                                  <img src="./x.png" alt="" />
                              </a>
                              <a href="">
                                  <img src="twitch.png" alt="" />
                              </a>
                              <a href="">
                                  <img src="./youtube.png" alt="" />
                              </a>
                              <a href="">
                                  <img src="./linkdln.png" alt="" />
                              </a>
                              <a href="">
                                  <img src="./instagram.png" alt="" />
                              </a>
                              <a href="">
                                  <img src="./ticktok.png" alt="" />
                              </a>
                              <a href="">
                                  <img src="github.png" alt="" />
                              </a>

                          </div>
                          <div className="footer-text">
                              All Rights Reserved - Squibonk Technologies 2024<br />
                              Official Email: Squibok@Hotmail.com
                          </div>
                      </div>
                  </div>
              </div>

          </div>
    </>
  )
}
