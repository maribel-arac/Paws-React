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
			<div className="container col-lg-12">
			{this.state.posts.map((post, i) =>

				<div class="card" key={i}>
				  <div class="card-header">
				    <span>{post.creator}</span>
				  </div>
				  <div class="card-body">
				    <h5 class="card-title">{post.name}</h5>
				    <p class="card-text">Es de raza {post.description}, se perdió por {post.date} {post.details}. Sus señas particulares son: {post.signs}, si la ves, ponte en contacto con: {post.contact} </p>
				    <small className="card-text">{post.date}</small>
				  </div>
				</div>
			)}
		</div>
		)
	}
}

export default DisplayPost;