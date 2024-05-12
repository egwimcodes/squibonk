import React from 'react'
import './Header.css'
import { OutlineButton } from '../Components/Compnents'

export default function Header() {
    return (
        <>
            <section className='header-container'>
                <div className="header-bg">
                    <div className="bg-blur-child first">
                        <img className='hero-child first' src="./Hero-child.png" alt="" />
                        <img className='hero-grand' src="./Hero-grand-child.png" alt="" />
                    </div>
                    <div className="bg-blur-child second">
                        <img className='hero-child' src="./Hero-child.png" alt="" />
                        <img className='hero-child center' src="./Hero-child.png" alt="" />
                        <img className='hero-child' src="./Hero-child.png" alt="" />
                    </div>
                </div>
                <div className="header-content">
                    <div className="header-content-child">
                        <div className="header-writup">
                            <div>
                                <img className='hero-svg-text' src="./Hero-Text.png" alt="" />
                            </div>
                            <p className="hero-text">SQUIBONK is an innovative crypto project revolutionizing the ecosystem with its unique features. With a generous rewards system, SQUIBONK is committed to ensuring long-term stability and growth for its community and ecosystem.</p>
                            <div className="header-btns">
                                <OutlineButton text={'Buy #SQUIBONK'} />
                                <OutlineButton text={'Join Community'} />
                            </div>
                        </div>
                        <div className="header-hero">
                            <img className='hero-img first' src="./Hero.png" alt="" />
                            <img className='hero-img second' src="./Hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
