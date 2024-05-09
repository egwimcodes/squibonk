import React from "react";
import "./Navbar.css";
import { TextButton, OutlineButton } from "../../Components/Compnents.jsx";
import { RiMenu5Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(true);
  const [visible, setVisible] = useState(false);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    console.log(window.innerWidth)
  })

  return (
    <div className="navbar">
      <nav>
        <ul className="mobile-nav" style={{ visibility: width > 790 ? "visible" : "hidden" | visible ? "visible" : "hidden"}}>
          <AiOutlineClose className="close-icon" onClick={() => setVisible(false)}/>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Roamap</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
        <div className="navbar-img">
          <img src="./nav-img.svg" alt="" />
        </div>
        <div className="navbar-btns">
          {/* Assuming TextButton and OutlineButton are defined elsewhere */}
          <button className="text-button">Join Community</button>
          <button className="outline-button">Buy #SQUIBONK</button>
        </div>
        <RiMenu5Fill className="menu-icon" onClick={() => setVisible(true)} style={{ cursor: "pointer" }} />


      </nav>
    </div>
  );
}