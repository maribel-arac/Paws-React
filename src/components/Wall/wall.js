import React, { Component } from 'react';
import CreatePost from '../Posts/createPost';
import firebase from '../Firebase/firebaseConfig';
import DisplayPost from '../Posts/displayPost';




class Wall extends Component {

	componentWillReceiveProps(){

		const userDB = this.props.user;
		const userDataBase = {
			uid: userDB.uid,
			name: userDB.displayName,
			email: userDB.email
		}
		if(userDataBase.uid === undefined){
		console.log("no");
		} else {
		const refUser = firebase.database().ref("users/" + userDB.uid);
		refUser.set(userDataBase);
		}
	}


	render(){

		const userInfo = this.props.user
		console.log(this.props)

		// const { posts } = this.props;

		return(
			<div className="container">
			  <div className="row">
			    <div className="col-8">
			    	<p>Este es el muro...YAAAAAAS </p>
			    	<CreatePost userInfo = { userInfo } />
			    	<DisplayPost infoUser = { userInfo } />
			    </div>
			    <div className="col-4">
			    	
			    </div>
			  </div>
			</div>
			)
	}
}


export default Wall;