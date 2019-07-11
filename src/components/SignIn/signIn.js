import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import Swal from "sweetalert2";
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
		Swal.fire({
		  type: 'error',
		  title: 'Vuelve a intentarlo',
		  showConfirmButton: false,
		  timer: 1500
		})
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}




	render() {
		return(

			<div className="container col-lg-6">
				<form onSubmit={this.signIn} className="colors">
				  <div className="form-group">
				  	<h1 className="text-center">Inicia Sesión</h1>
				    <label htmlFor="exampleInputEmail1">Correo electrónico</label>
				    <input type="email" onChange={this.handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingresa email" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1">Contraseña</label>
				    <input type="password" onChange={this.handleChange} className="form-control" id="password" placeholder="Ingresa contraseña" />
				  </div>
				  <button type="submit" className="btn color" >Ingresar</button>
				  <Link to='/register' className="brand-logo btn btnRegister">Crear Cuenta</Link>

				</form>
			</div>
		)
	}

}

export default SignIn;