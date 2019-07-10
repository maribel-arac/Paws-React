import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import BtnSignOut from '../SignOut/signOut';
import Logo from '../Images/paws.png';
import '../Styles/navbar.css';

class Navbar extends Component{

render() {

return (

		<nav className="navbar col-lg-12 bg-color">
		  <a className="navbar-brand" href="#">
		    <img src={Logo} width="40" height="40" className="d-inline-block align-top" alt="logo"/>
		    Paws
		  </a>
		  <BtnSignOut className="btn justify-content-end" />
		</nav>
	)
}
}

export default Navbar;