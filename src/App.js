import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickComponent from './ClickContainer'
import HoverCounter from './HoverContainer'
function App() {
  return (
    <div className="App">
      <ClickComponent />
      <HoverCounter/>
    </div>
  );
}

export default App;
