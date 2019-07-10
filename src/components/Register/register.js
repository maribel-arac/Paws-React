import React, { Component } from 'react';
import '../Styles/signIn.css';

class Register extends Component {
	state= {
		email:'',
		password:'',
		firstName:'',
		lastName:''

	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	}


	render() {
		return(

			<div className="container col-lg-6">
				<form onSubmit={this.handleSubmit} className="colors">
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
				  <button type="submit" className="btn btn-color">Crear cuenta</button>
				</form>
			</div>
		)
	}

}

export default Register;