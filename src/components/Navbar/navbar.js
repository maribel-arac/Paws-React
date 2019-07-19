import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BtnSignOut from '../SignOut/signOut';
import Logo from '../Images/paws.png';
import '../Styles/navbar.css';

class Navbar extends Component{

render() {

return (

		<nav className="navbar col-lg-12 bg-color sticky-top">
		  <a className="navbar-brand" href="#signin">
		    <img src={Logo} width="75" height="75" className="d-inline-block align-top" alt="logo"/>
		  </a>
		  <h1>Mascotas extravíadas</h1>
		  <a className="nav-link" to="/Profile"><Link to="/Profile" className="">Perfil <span></span></Link></a>
		  <BtnSignOut className="btn justify-content-end" />
		</nav>
	)
}
}

export default Navbar;