import React, { Component } from 'react';
import firebase from 'firebase';
import '../Styles/navbar.css';
// import '../Styles/signedin.css';

class SignOut extends Component{
	constructor(){
		super();
		this.signOut = this.signOut.bind(this);
	}

signOut(){
	firebase.auth().signOut().then(function() {
   		console.log("Sesion cerrada")
	}).catch(function(error) {
	  console.log (error)
	});
}

render() {
	
	return (
	
			    <button onClick={this.signOut}>Cerrar sesión</button>

	)
}
}

export default SignOut;