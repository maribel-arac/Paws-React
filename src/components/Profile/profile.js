import React from 'react';
import firebase from '../Firebase/firebaseConfig';

let postArray = []

class Profile extends React.Component {
	constructor(){
		super();
		this.state = {
			posts: []
		}
		this.postsProfile = this.postsProfile.bind(this);
	}

	componentWillReceiveProps(){
		const idUser = this.props.userObject;
		idUser ? this.postsProfile(idUser.uid) : console.log("error")
	}

	componentDidMount(){
		this.componentWillReceiveProps();
	}

	postsProfile(idUser){
		function wallPosts(snapshot){
			let posts = []

			snapshot.forEach(post => {
				const items = post.val();
				posts.unshift(items)
			});
			return posts
		}
		const dataBasePostRef = firebase.database().ref();
		const postsRef = dataBasePostRef.child("profiles" + idUser);
		console.log(idUser);
		postsRef.on("value", snapshot => {
			postArray = wallPosts(snapshot);
			this.setState({
				posts: postArray
			})
		})
		this.render()
	}

	render(){
		console.log(this.state.posts)
		return(
			<div>
			</div>
			)
	}
}

export default Profile;