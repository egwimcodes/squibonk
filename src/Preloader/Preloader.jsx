import React from 'react'
import './Preloader.css'

export default function Preloader() {
    return (
        <>
            <div className="preloader-core">
                <main>
                    <div class="preloader">
                        <div class="preloader__square"></div>
                        <div class="preloader__square"></div>
                        <div class="preloader__square"></div>
                        <div class="preloader__square"></div>
                    </div>
                    <div class="status">Loading<span class="status__dot">.</span><span class="status__dot">.</span><span class="status__dot">.</span></div>
                </main>


            </div>
        </>
    )
}
