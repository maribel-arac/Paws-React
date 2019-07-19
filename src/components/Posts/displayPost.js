import React, { Component } from "react";
import firebase from "../Firebase/firebaseConfig";
import Swal from "sweetalert2";
import '../Styles/displayPost.css';

class DisplayPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			imageURL: " ",
			likeCounter: 0
		}
	}

	componentWillMount() {
		function wallPosts(snapshot) {
			let posts = []

			snapshot.forEach(post => {
				const elements = post.val();
				posts.unshift(elements)
			});
			return posts
		}

		const dataBasePostsRef = firebase.database().ref();
		const postsRef = dataBasePostsRef.child("wall/");
		postsRef.on("value", snapshot => {
			const arrayPost = wallPosts(snapshot);
			this.setState({
				posts: arrayPost
			})
		})
	}

	likePost = () => {
		this.setState({
			count: this.state.likeCounter + 1
		}
		);
	}

	deletePost = (e) => {
		e.preventDefault();
		const idPost = e.target.id;
		console.log(idPost)
		const idUser = firebase.auth().currentUser.uid;
		const dataBasePostsRef = firebase.database().ref();
		const postsRef = dataBasePostsRef.child("wall/");
		const userPostRef = postsRef.child("profiles/" + idUser);
		Swal.fire({
			type: "warning",
			title: "¿Quieres eliminar tu publicación?",
			showCancelButton: true,
			confirmButtonColor: "#27A10C",
			confirmButtonText: "Si, eliminarlo",
			cancelButtonColor: "#d33",
			timer: 2500
		}).then(result => {
			console.log("result", result.value);
			if (result.value) {
				Swal.fire({
					type: "success",
					title: "Listo",
					text: "Tu formulario ha sido eliminado",
					timer: 1500
				}).then(result => {
					if (result.dismiss === Swal.DismissReason.timer) {
						console.log("El timer me cerro");
					}
				});
				postsRef.child(idPost).remove();
				userPostRef.child(idPost).remove();
			}
		});
	};

	render() {
		return (
			<div className="container col-lg-12 text-center">
				{this.state.posts.map((post, i) => (
					<div className="card bg-transparent" key={i}>
						<div className="card-header col-md-12 col-sm-12">
							{console.log(post.idUser)}

							<span className="fontText">{post.creator}</span>
						</div>
						<img src={ post.photoUrl }  className="card-img-top img-fluid image" alt="lost pet"/>
						{console.log(this.state.imageURL)}
						<div className="card-body">
							<h2 className="card-title">{post.name}</h2>
							<p className="card-text description-text">

								Es de raza {post.description}, se perdió por{" "}
								{post.date} {post.details}. Sus señas
								particulares son: {post.signs}, si la ves, ponte
								en contacto con: {post.contact}{" "}
							</p>
							<small className="card-text">
								{post.publishedDate}
							</small>
						</div>
						<div className="container">
							<button 
								type="button" 
								onClick = { this.likePost } 
								className = "btn sadBtn" >
							 <span>😞 Me entristece </span>
							</button>
							<button
								type="button"
								onClick = { this.deletePost }
								id = { post.id }
								className="btn deleteBtn"
							> <i className="fas fa-trash"></i> 
								Eliminar
							</button>
							
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default DisplayPost;