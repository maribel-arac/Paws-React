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

			<div className="container">
				<form onSubmit={this.handleSubmit} className="colors">
				  <div className="form-group">
				  	<h5>Registro</h5>
				    <label htmlFor="exampleInputEmail1">Correo electrónico</label>
				    <input type="email" onChange={this.handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingrese un email" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1">Contraseña</label>
				    <input type="password" onChange={this.handleChange} className="form-control" id="password" placeholder="Ingrese contraseña" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputName1">Nombre</label>
				    <input type="text" onChange={this.handleChange} className="form-control" id="name"  placeholder="Ingrese nombre" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputLastName1">Apellido</label>
				    <input type="text" onChange={this.handleChange} className="form-control" id="lastName" placeholder="Ingrese un apellido" />
				  </div>
				  <button type="submit" className="btn btn-color">Registrar</button>
				</form>
			</div>
		)
	}

}

export default Register;