import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./components/Styles/App.css";
import firebase from "./components/Firebase/firebaseConfig";
import Welcome from "./components/Welcome/welcome";
import Wall from "./components/Wall/wall";
import SignIn from "./components/SignIn/signIn";
import Register from "./components/Register/register";
import Profile from "./components/Profile/profile";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
      userDB: {}
    }
    this.observerListener = this.observerListener.bind(this);
  }
  componentDidMount() {
    this.observerListener();
  }

  observerListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
        if (user.displayName === null) {
          this.setState({
            userDB: {
              email: user.email,
              name: user.displayName
            }
          });
        } else {
          this.setState({
            userDB: {
              name: user.displayName,
              email: user.email
            }
          });
        }
      } else {
        this.setState({ user: null });
      }
    });
    console.log(this.state.userDB);
  }

  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Route exact path="/" render={() => <Welcome />} />
          <Route
            path="/signin"
            render={() =>
              this.state.user ? <Wall user={this.state.user} /> : <SignIn userBD = { this.state.userDB } />
            }
          />
          <Route
            path="/register"
            render={() => (this.state.user ? <Wall /> : <Register userDB = { this.state.userDB} />)}
          />
          <Route
            path="/profile"
            render={() => <Profile user = { this.state.userDB } userObject = { this.state.user } />}
          />

        </div>
      </HashRouter>
    );
  }
}

export default App;