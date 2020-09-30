import React from 'react';
import Projects from '../Projects';

import background from '../../../assets/bg.jpeg';
import './Header.css';

const Header = ({ title, children }) => (
  <header>
    <h1>{title}</h1>
    <img width="350px" src={background} alt="Background" />
    <Projects />
    {children}
  </header>
);

export default Header;
