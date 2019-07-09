import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './components/Styles/App.css';
import Navbar from './components/Navbar/navbar';
import Welcome from './components/Welcome/welcome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Welcome />
      </div>
    </BrowserRouter>
  );
}

export default App;
