import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './components/Styles/App.css';
import Navbar from './components/Navbar/navbar';
import Welcome from './components/Welcome/welcome';
import SignIn from './components/SignIn/signIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Route exact path='/' render={() => <Welcome />} />
        <Route path='/signin' render={() => <SignIn />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
