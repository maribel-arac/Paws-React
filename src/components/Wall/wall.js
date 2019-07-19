import React, { Component } from 'react';
import CreatePost from '../Posts/createPost';
import firebase from '../Firebase/firebaseConfig';
import DisplayPost from '../Posts/displayPost';
import Navbar from '../Navbar/navbar';
import '../Styles/wall.css';


class Wall extends Component {

	componentWillReceiveProps(){

		const userDB = this.props.user;
		const userDataBase = {
			uid: userDB.uid,
			name: userDB.displayName,
			email: userDB.email
		}
		if(userDataBase.uid === undefined){
		// console.log("no");
		} else {
		const refUser = firebase.database().ref("users/" + userDB.uid);
		refUser.set(userDataBase);
		}
	}


	render(){

		const userInfo = this.props.user

		return(
			<div className="container justify-content-center col-lg-12">
			  <div className="row">
			    <div className="col-lg-12">
			    	<Navbar />
			    	<h1 className="title">¿Se te perdió tu mascota? ¡Publícala y encuéntrala!</h1>
			    	<CreatePost userInfo = { userInfo } />
			    	<DisplayPost infoUser = { userInfo } />
			    </div>
			  </div>
			</div>
			)
	}
}


export default Wall;