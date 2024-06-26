import React, { useState, useEffect } from 'react';
import './App.css';
import Preloader from './Preloader/Preloader';
import Core from './Core';

function App() {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.addEventListener('load', loadFunction);
    return () => window.removeEventListener('load', loadFunction);
  }, []);

  function loadFunction() {
    console.log('Loaded');
  }

  return (
    <>
      <div className="preloader" style={{ visibility: preloader ? 'visible' : 'hidden', display: preloader ? 'block' : 'none', position: preloader ?? 'fixed' }}>
        <Preloader />
      </div>
      <div className="home" style={{ visibility: preloader ? 'hidden' : 'visible', display: preloader ? 'none' : 'block' }}>
        <Core />
      </div>
    </>
  );
}

export default App;
