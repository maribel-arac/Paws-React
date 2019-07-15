import React, {Component} from 'react';



class HomeNavbar extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
  
      <nav>
        <h2 className="logo">{this.props.title}</h2>
      </nav>
      
      

    )
  }
  
    
  
}

export default HomeNavbar;