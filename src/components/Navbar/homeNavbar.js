import React, {Component} from 'react';
import Logo from '../Images/paws.png';
import '../Styles/homeNavbar.css';



class HomeNavbar extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
  
     <nav className="navbar col-lg-12 bg-color">
      <a className="navbar-brand" href="#welcome">
        <img src={Logo} width="75" height="75" className="d-inline-block align-top" alt="logo"/>
     
      </a>
      <p className="font-color">PAWS</p>
    </nav>

    )
  }
  
    
  
}

export default HomeNavbar;