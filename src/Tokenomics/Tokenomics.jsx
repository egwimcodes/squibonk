import React from "react";
import "./Tokenomics.css";
import { OutlineFillButton } from '../Components/Compnents'


export default function Tokenomics() {
  return (
    <>
      <section className="tokenomics-container">
        <div className="tokenomics-content">
          <h2>TOKENOMICS</h2>
          <div className="tokenomics-children">
            <div className="tokenomics-children-container">
              <div className="tokenomics-child-1">
                <div className="tokenomics-child-first">
                  <div className="child-1">
                    <div className="tokenomics-child-header">
                      <h3 className="tokenomics-header-text">
                        Squidbonk Tokens
                      </h3>
                      <p className="tokenomics-header-text-sub">
                        Squibonk Tokens has been distributed as follows.
                      </p>
                    </div>
                    <div className="tokenomics-child-content">
                      <div className="tokenmics-child-content-1">
                        <div className="div">
                          <h3>Squidbonk</h3>
                          <p>Token name</p>
                        </div>
                        <div className="div">
                          <h3>1,000,000</h3>
                          <p>Total Supply (100%)</p>
                          <div className="progress-bar">
                            <div
                              className="progress-bar-level"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="div">
                          <h3>250,000</h3>
                          <p>Total Supply (25%)</p>
                          <div className="progress-bar">
                            <div
                              className="progress-bar-level"
                              style={{ width: "20%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="div">
                          <h3>50,000</h3>
                          <p>Total Supply (5%)</p>
                          <div className="progress-bar">
                            <div
                              className="progress-bar-level"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="div"></div>
                        <div className="div"></div>
                        <div className="div"></div>
                      </div>
                      <div className="tokenmics-child-content-2">
                        <div className="div">
                          <h3>Decimals</h3>
                          <p>18</p>
                        </div>
                        <div className="div">
                          <h3>600,000</h3>
                          <p>Pancakeswap (60%)</p>
                          <div className="progress-bar">
                            <div
                              className="progress-bar-level"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="div">
                          <h3>100,000</h3>
                          <p>Marketing (10%)</p>
                          <div className="progress-bar">
                            <div
                              className="progress-bar-level"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tokenomics-child-footer">
                      <div className="tokenomics-child-footer-1">
                        <div className="div footer">
                          <h3>Max Wallet</h3>
                          <p>No</p>
                        </div>
                        <div className="div footer">
                          <h3>Max Tx Buy</h3>
                          <p>No</p>
                        </div>
                        <div className="div footer">
                          <h3>Max Tx Sell</h3>
                          <p>No</p>
                        </div>
                      </div>
                      <div className="tokenomics-child-footer-2">
                        <h3>Contract</h3>
                        <div className="tokenomics-copy">
                          <p>0xEc9E63221C99516...</p>
                          <img src="./copy.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tokenomics-child-2">
                <div className="tokenomics-children-container-second">
                  <div className="tokenomics-box">
                    <div className="tokenmics-box-content">
                      <div className="div">
                        <h3>80,000</h3>
                        <p>Total Supply (80%)</p>
                        <div className="progress-bar">
                          <div
                            className="progress-bar-level  box"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="div-level">
                        <div className="div-level-child">
                          <div className="linebox"></div>
                          <div className="div linebox-child">
                            <h3>50,000</h3>
                            <p>BNB Rewards (5%)</p>
                            <div className="progress-bar">
                              <div
                                className="progress-bar-level box"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="div-level-child">
                          <div className="linebox"></div>
                          <div className="div linebox-child">
                            <h3>20,000</h3>
                            <p>LP (2%)</p>
                            <div className="progress-bar">
                              <div
                                className="progress-bar-level box"
                                style={{ width: "20%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="div-level-child">
                          <div className="linebox"></div>
                          <div className="div linebox-child">
                            <h3>10,000</h3>
                            <p>Marketing Wallet (1%)</p>
                            <div className="progress-bar">
                              <div
                                className="progress-bar-level box"
                                style={{ width: "10%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tokenomics-btns">
                    <OutlineFillButton text={'Pool Liquidity Locked'} />
                    <OutlineFillButton text={'Buy On Pancakeswap'} />
                    <OutlineFillButton text={'AUDIT'} />
                  </div>
                </div>
              </div>
            </div>
            <img className="ellips1" src="./Hero-grand-child81.png" alt="" />
            <img className="ellips2" src="./Hero.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
