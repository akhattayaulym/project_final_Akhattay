import React, { useState,useEffect } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import CurrentTime from "./Time";

const Header = () => {
  const [navListOpen, setNavListOpen] = useState(false);
  useEffect(() => {

    return () => {
      setNavListOpen(false)
  };
  }, []);

  const toggleNavList = () => {
    setNavListOpen(!navListOpen);
  };

  return (
    <header>
      <div className='header-wrapper'>
        <div className='logo'>
          <img src='./images/logo.png' alt='' />
        </div>
        <div className={`nav ${navListOpen ? 'active' : ''}`}>
          <ul className='header-ul'>
            {nav.map((item, index) => (
             <li key={index} onClick={toggleNavList}>
             <Link to={item.path}>{item.text}</Link>
           </li>
            ))}
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px'}}>
          <CurrentTime/>
          <div className='burger-menu' onClick={toggleNavList}>
            <div className={`bar ${navListOpen ? 'open' : ''}`}></div>
            <div className={`bar ${navListOpen ? 'open' : ''}`}></div>
            <div className={`bar ${navListOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
