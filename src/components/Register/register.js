import React, { Component } from 'react';
import '../Styles/register.css';
import firebase from '../Firebase/firebaseConfig';
import Swal from "sweetalert2";

class Register extends Component {
	constructor(){
		super();

		this.state= {
		name:'',
		lastName:'',
		email:'',
		password:''	
	}
		this.handleChange = this.handleChange.bind(this);
		this.createUser = this.createUser.bind(this)

	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	createUser(e){
		e.preventDefault();
		const name = this.state.name;
		console.log(this.state);
		const lastName = this.state.lastName;
		const email = this.state.email;
		const password = this.state.password;
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(function(){
			const user = firebase.auth().currentUser;
			user.updateProfile({
				name: name,
				lastName: lastName
			})
		})
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


	render() {
		return(

			<div className="container col-lg-6">
				<form onSubmit={this.createUser} className="colors">
				  <div className="form-group">
				  	<h1 className="text-center">Crea tu cuenta</h1>
				  	<div className="form-group">
				    <label htmlFor="exampleInputName1">Nombre</label>
				    <input type="text" onChange={this.handleChange} className="form-control" id="name"  placeholder="Ingresa nombre" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputLastName1">Apellido</label>
				    <input type="text" onChange={this.handleChange} className="form-control" id="lastName" placeholder="Ingresa un apellido" />
				  </div>
				    <label htmlFor="exampleInputEmail1">Correo electrónico</label>
				    <input type="email" onChange={this.handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingresa un email" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1">Contraseña</label>
				    <input type="password" onChange={this.handleChange} className="form-control" id="password" placeholder="Ingresa contraseña" />
				  </div>
				  <button type="submit" className="btn btn-color col text-center btn-default">Crear cuenta</button>
				</form>
			</div>
		)
	}

}

export default Register;