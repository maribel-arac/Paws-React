import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar.css';

class Navbar extends Component{

render() {

return (
	
		<nav className="navbar navbar-expand-lg bg-color">
		  	
		  	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    	<span className="navbar-toggler-icon"></span>
		  	</button>
		  	<div className="collapse navbar-collapse" id="navbarNav">
		  	<Link to='/' className="brand-logo">Paws</Link>
		  	</div>
		</nav>
	)
}
}

export default Navbar;