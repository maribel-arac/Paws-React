import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import HomeNavbar from '../Navbar/homeNavbar';
import WelcomeImg from '../Images/welcomeImg.png';
import'../Styles/welcome.css';


const myStyles = {
	width: '600px',
	height: '300px',
	marginTop: '50px'
}


class Welcome extends Component {


	render(){

		
		return (

			<div id="welcome" className="text-center">
			<HomeNavbar />
				<img className="welcomeImg img-fluid" src={WelcomeImg} alt="pets" style={myStyles} />
					<p> <i className="fas fa-paw"></i> Publica y encuentra a tus mascotas perdidas</p> 
					<p><i className="fas fa-paw"></i> Localiza al mejor adoptante</p> 
	
				    <NavLink to='/signin' className="btn btnColor">Iniciar sesión</NavLink> 
				    
			</div>

			);


	}
};

export default Welcome;