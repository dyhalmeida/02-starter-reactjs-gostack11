import React from 'react';
import Projects from '../Projects';

const Header = ({ title, children }) => (
  <header>
    <h1>{title}</h1>
    <Projects />
    {children}
  </header>
);

export default Header;
