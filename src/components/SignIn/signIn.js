import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import '../Styles/signIn.css';

class SignIn extends Component {
	constructor(){
		super();

		this.state= {
		email:'',
		password:''

	}
		this.signIn = this.signIn.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	

	signIn(e){
		e.preventDefault();
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
		.catch(function(error) {
		console.log(error);
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}




	render() {
		return(

			<div className="container">
				<form onSubmit={this.signIn} className="colors">
				  <div className="form-group">
				  	<h5>Iniciar Sesión</h5>
				    <label htmlFor="exampleInputEmail1">Correo electrónico</label>
				    <input type="email" onChange={this.handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingrese un email" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1">Contraseña</label>
				    <input type="password" onChange={this.handleChange} className="form-control" id="password" placeholder="Ingrese contraseña" />
				  </div>
				  <button type="submit" className="btn btn-color">Iniciar Sesión</button>
				  <Link to='/register' className="brand-logo">Register</Link>

				</form>
			</div>
		)
	}

}

export default SignIn;