import React, { Component } from 'react';
import CreatePost from '../Posts/createPost';



class Wall extends Component {
	render(){
		// console.log(this.props);

		const { posts } = this.props;

		return(
			<div className="container">
			  <div className="row">
			    <div className="col-8">
			    	<p>Holiiiiiiii en el wall OMG</p>
			    	<CreatePost />
			    </div>
			    <div className="col-4">
			    	
			    </div>
			  </div>
			</div>
			)
	}
}



export default Wall;