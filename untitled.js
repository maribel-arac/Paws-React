import React, { Component } from 'react';
// import '../Styles/signUp.css';

class SignIn extends Component {
	state= {
		email:'',
		password:''

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
				  	<h5>Iniciar Sesión</h5>
				    <label htmlFor="exampleInputEmail1">Correo electrónico</label>
				    <input type="email" onChange={this.handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingrese un email" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1">Contraseña</label>
				    <input type="password" onChange={this.handleChange} className="form-control" id="password" placeholder="Ingrese contraseña" />
				  </div>
				  <button type="submit" className="btn btn-color">Ingresar</button>
				</form>
			</div>
		)
	}

}

export default SignIn;