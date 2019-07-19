import React, { Component } from "react";
import moment from "moment";
import firebase from "../Firebase/firebaseConfig";
import Swal from "sweetalert2";
import FileUploader from 'react-firebase-file-uploader';
import "../Styles/createPost.css";

class CreatePost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			date: "",
			description: "",
			details: "",
			signs: "",
			contact: "",
			image: "",
			imageURL: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.sendFormFirebase = this.sendFormFirebase.bind(this);
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	sendFormFirebase(e) {
		e.preventDefault(e);
		const idUser = firebase.auth().currentUser.uid;
		const user = firebase.auth().currentUser;
		const nameUser = user.displayName;
		const date = moment().format("lll");
		const postKey = firebase
			.database()
			.ref("users/" + idUser)
			.child("post")
			.push().key;
		const postForm = {
			creator: nameUser,
			name: this.state.name,
			date: this.state.date,
			description: this.state.description,
			details: this.state.details,
			signs: this.state.signs,
			contact: this.state.contact,
			publishedDate: date,
			id: postKey,
			photoUrl: this.state.imageURL
		};
		let updates = {};
		updates["/wall/" + postKey] = postForm;
		updates["/profiles/" + idUser + "/" + postKey] = postForm;
		firebase
			.database()
			.ref()
			.update(updates)
			.then(update => {
				console.log(update);
			});
		console.log(updates);
		this.setState({
			name: "",
			date: "",
			description: "",
			details: "",
			signs: "",
			contact: ""
		});
		Swal.fire({
			type: "success",
			title: "Listo",
			text: "Tu formulario ha sido publicado",
			timer: 1900
		}).then(result => {
			if (result.dismiss === Swal.DismissReason.timer) {
				console.log("El timer me cerro");
			}
		});
	}


//función para subir foto
    handleUploadSuccess = fileName => {
        this.setState({
            image: fileName
        })

        firebase.storage().ref('lostPets').child(fileName).getDownloadURL()
            .then(url => this.setState({
                imageURL: url
            }))
    }
	render() {
		return (
			<div className="container alignBtn col-lg-12">
				<button
					type="button"
					className="btn colorBtn justify-content-end col-lg-4 text-white"
					data-toggle="modal"
					data-target="#exampleModal"
					data-whatever="@getbootstrap"
				>
					Llenar formulario
				</button>

				<div
					className="modal fade col-lg-12"
					id="exampleModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true" >
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h4
									className="modal-title"
									id="exampleModalLabel">
									Mascota perdida
								</h4>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form className="colors">
									<div className="form-group">
										<label
											htmlFor="message-text"
											className="col-form-label">
											Nombre:
										</label>
										<textarea
											className="form-control"
											onChange={this.handleChange}
											id="name"
											placeholder="Nombre de la mascota"
											required />
									</div>
									<div className="form-group">
										<label
											htmlFor="message-text"
											className="col-form-label" >
											Lugar y fecha:
										</label>
										<textarea
											className="form-control"
											onChange={this.handleChange}
											id="date"
											placeholder="Lugar y fecha de cuando fue vista por última vez"
											required />
									</div>
									<div className="form-group">
										<label
											htmlFor="message-text"
											className="col-form-label" >
											Descripción:
										</label>
										<textarea
											className="form-control"
											onChange={this.handleChange}
											id="description"
											placeholder="Talla, raza, color"
											required />
									</div>
									<div className="form-group">
										<label
											htmlFor="message-text"
											className="col-form-label" >
											Detalles:
										</label>
										<textarea
											className="form-control"
											onChange={this.handleChange}
											id="details"
											placeholder="Menciona si traía placa, collar y/o ropa"
											required />
									</div>
									<div className="form-group">
										<label
											htmlFor="message-text"
											className="col-form-label">
											Señas particulares:
										</label>
										<textarea
											className="form-control"
											onChange={this.handleChange}
											id="signs"
											placeholder="¿Qué señas particulares tiene tu mascota?"
											required
										/>
									</div>
									<div className="form-group">
										<label
											htmlFor="message-text"
											className="col-form-label">
											Contacto:
										</label>
										<textarea
											className="form-control"
											onChange={this.handleChange}
											id="contact"
											placeholder="Nombre y telefono con quien ponerse en contacto"
											required
										/>
										 <div className="container">
							                {this.state.image && <img src= { this.state.imageURL } alt="" />}

							                <FileUploader 
							                accept = "image/*"
							                name ='image'
							                storageRef = { firebase.storage().ref('lostPets') }
							                onUploadSuccess = { this.handleUploadSuccess }
							                />
							            </div>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-danger"
									data-dismiss="modal">
									Cancelar
								</button>
								<button
									type="button"
									onClick={this.sendFormFirebase}
									data-dismiss="modal"
									className="btn btn-success"
								>
									Publicar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CreatePost;