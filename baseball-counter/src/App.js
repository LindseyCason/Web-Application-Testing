import React from 'react';

import './App.css';
import Dashboard from "./components/dashboard"
import Display from './components/display';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <Dashboard />
        
      </header>
    </div>
  );
}

export default App;
