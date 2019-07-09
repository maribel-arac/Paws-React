import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './components/Styles/App.css';
import firebase from './components/Firebase/firebaseConfig';
import Navbar from './components/Navbar/navbar';
import Welcome from './components/Welcome/welcome';
import Wall from './components/Wall/wall';
import SignIn from './components/SignIn/signIn';
import Register from './components/Register/register';




class App extends React.Component {

  constructor(){
    super();

    this.state= {
      user:{},
    }
  this.observerListener = this.observerListener.bind(this);
  }
componentDidMount(){
  this.observerListener();
}

observerListener(){
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
   this.setState({user});
    // ...
  } else {
    // User is signed out.
    this.setState({user: null});
  }
});
}



  render(){

     return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Route exact path='/' render={() => <Welcome />} />
        <Route path='/signin' render={ () => this.state.user ? <Wall/> : <SignIn />} />
        <Route path='/register' render={ () => this.state.user ? <Wall/> : <Register />} />

      </div>
    </BrowserRouter>
  );

  }
}

export default App;
