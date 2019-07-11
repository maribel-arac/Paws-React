import React, { Component } from 'react';
import firebase from '../Firebase/firebaseConfig';


class DisplayPost extends Component { 

		constructor(){
		super();

		this.state={
			posts: []
		}

	}

	componentWillMount(){
		function wallPosts(snapshot){
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

	render(){
		return(
			<div className="container col-lg-6">
			{this.state.posts.map((post, i) =>
				<div className="container" key={i}>
					<p>{post.name}</p>
					<p>{post.date}</p>
					<p>{post.description}</p>  {/* aqui se va a imprimir el formulario y tengo que llamar a TODOS los values del formulario: nombre, lugar, descripcion, etc*/}
					<p>{post.details}</p>
					<p>{post.signs}</p>
					<p>{post.contact}</p>

				</div>
			)
		}
		</div>
		)
	}
}


export default DisplayPost;