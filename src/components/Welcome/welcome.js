import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import WelcomeImg from '../Images/welcomeImg.png';


const myStyles = {
	width: '600px',
	height: '300px'
}


class Welcome extends Component {


	render(){

		
		return (
			<div id="home" className="text-center">
				<img className="welcomeImg" src={WelcomeImg} alt="pets" style={myStyles} />
					<p>Publica y encuentra a tus mascotas perdidas Localiza al mejor adoptante Descubre a tu mascota ideal</p>

					<ul className="justify-content-end">
				      <li className="nav-item">
				        <NavLink to='/signin'>Iniciar sesión</NavLink> 
				      </li>
			    	</ul>
			</div>

			);


	}
};

export default Welcome;