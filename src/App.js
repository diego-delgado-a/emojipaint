import React from 'react';
import './App.css';
import Dimension from './components/Dimension'

function App() {
  return (
    <div className="App">
      {/* select component */}
      <select>
        {/* eslint-disable-next-line */}
        <option>😊</option>
        {/* eslint-disable-next-line */}
        <option>😊</option>
        {/* eslint-disable-next-line */}
        <option>😊</option>
        {/* eslint-disable-next-line */}
        <option>😊</option>
      </select>

      {/* dimension component */}
      <Dimension label="width" />
      <Dimension label="height" />

      {/* canvas component */}


    </div>
  );
}

export default App;
