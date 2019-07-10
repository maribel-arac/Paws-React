import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import WelcomeImg from '../Images/welcomeImg.png';
// import '../Styles/signIn.css';
import'../Styles/welcome.css';


const myStyles = {
	width: '600px',
	height: '300px'
}


class Welcome extends Component {


	render(){

		
		return (
			<div id="home" className="text-center">
				<img className="welcomeImg img-fluid" src={WelcomeImg} alt="pets" style={myStyles} />
					<p> <i class="fas fa-paw"></i> Publica y encuentra a tus mascotas perdidas</p> 
					<p><i class="fas fa-paw"></i> Localiza al mejor adoptante</p> 
					<p> <i class="fas fa-paw"></i> Descubre a tu mascota ideal</p>
	
				    <NavLink to='/signin' className="btn btn-color">Iniciar sesión</NavLink> 
				    
			</div>

			);


	}
};

export default Welcome;