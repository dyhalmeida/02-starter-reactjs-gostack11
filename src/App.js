import React from 'react';
import Header from './components/Header';

const App = () => (
  <>
    <Header title="React JS" />
    <Header title="React JS com componente filho">
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
      </ul>
    </Header>
  </>
);

export default App;
