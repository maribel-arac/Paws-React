import React, { Component } from 'react';
import moment from "moment";
import firebase from '../Firebase/firebaseConfig';
import Swal from "sweetalert2";


class CreatePost extends Component {

	constructor(props){
		super(props);

		this.state ={
				name:'',
				date:'',
				description:'',
				details:'',
				signs:'',
				contact:''
		}
		this.handleChange = this.handleChange.bind(this);
		this.sendFormFirebase = this.sendFormFirebase.bind(this)
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	sendFormFirebase(e){
		e.preventDefault(e);
		const idUser = firebase.auth().currentUser.uid;
		const user = firebase.auth().currentUser;
		const nameUser = firebase.auth().currentUser.displayName;
		const date = moment().format('lll');
		const postKey = firebase.database().ref("users/" + idUser).child("post").push().key;
		const postForm ={
			creator: nameUser,
			name: this.state.name,
			date: this.state.date,
			description: this.state.description,
			details: this.state.details,
			signs: this.state.signs,
			contact: this.state.contact,
			publishedDate: date
		};
		let updates = {}
		updates['/wall/' + postKey] = postForm;
		updates['/profiles/' + idUser + '/' + postKey] = postForm;
		firebase.database().ref().update(updates).then((update) => {
			console.log(update)
		});
		console.log(updates)
		this.setState({ 
			name:'',
			date:'',
			description:'',
			details:'',
			signs:'',
			contact:''
		})
		Swal.fire({
		  type: 'success',
		  title: 'Listo',
		  text: 'Tu Formulario ha sido publicado',
		  timer: 1900,
		}).then((result) => {
			if(
				result.dismiss === Swal.DismissReason.timer
				) {
				console.log('El timer me cerro')
			}
		})
	}


	render() {
		return(

			<div className="container col-lg-8">
				<form onSubmit={this.sendFormFirebase} className="colors">
				  <div className="form-group">
				  	<button className="btn btn-warning">Mascota extraviada</button>
				  	<h3>Formulario</h3>
				    <label htmlFor="exampleInputEmail1">Nombre</label>
				    <input type="text" onChange={this.handleChange} className="form-control" id="name" aria-describedby="emailHelp" placeholder="Nombre de la mascota" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputDate">Fecha</label>
				    <input type="text" onChange={this.handleChange} className="form-control" id="date" placeholder="Fecha y lugar" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputDescription">Descripción</label>
				    <input type="text" onChange={this.handleChange} className="form-control" id="description" placeholder="Talla, raza, color" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputDetails">Detalles</label>
				    <input type="text" onChange={this.handleChange} className="form-control" id="details" placeholder="Menciona si traía placa, collar, ropa" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputSigns">Señas particulares</label>
				    <input type="text" onChange={this.handleChange} className="form-control" id="signs" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputContact">Contacto</label>
				    <input type="text" onChange={this.handleChange} className="form-control" id="contact" placeholder="Nombre y cel" />
				  </div>
				  <button type="submit" className="btn btn-success">Publicar</button>
				</form>
			</div>
		)
	}

}


export default CreatePost;