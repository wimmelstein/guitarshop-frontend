import React from 'react';
import './App.css';
import GuitarView from './layout/GuitarView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'/Original.png'} alt='Logo' width='50%' height='50%'/>
      </header>
      <GuitarView />
    </div>
  );
}

export default App;
