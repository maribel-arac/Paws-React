import React from 'react';
import firebase from '../Firebase/firebaseConfig';
import Navbar from '../Navbar/navbar';

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
				<Navbar />
				<div className="card">
					<div className="card-body">
						<h3>{this.props.user.name}</h3>
					</div>
					<div className="col-md-11 align-content-center mx-auto">
						{postArray !== [] || undefined ? this.state.posts.map((post, i) =>
							<div className="card" key={i}>
								<div className="container col-md-12 col-sm-12">
									<div className="row">
										<div className="col col-md-9 col-sm-9 col-6">
											<span className="">{post.creator}</span>
										</div>
									</div>
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
								</div>
							</div>
							): console.log("error")}
						</div>
					</div>
				</div>
			)
	}
}

export default Profile;