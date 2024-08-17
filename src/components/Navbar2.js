import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo192 from'./logo192.png'
import {Link} from 'react-router-dom';
export class Navbar extends Component {
  

  render() {
    let{imgUrl}=this.props;
    return (

    
        <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light"style={{margin:"0"}}>
  <div className="container-fluid"style={{marginright:"2px"}}>
    <a className="navbar-brand" href="/general">  <img src={logo192} alt="logo" height="100px" width="100px" className="navbar-logo" /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-0 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/general">Home</a>
        </li>
        
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Categories
        </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/Business">Business</Link></li>
            <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/General">General</Link></li>
            <li><Link className="dropdown-item" to="/Health">Health</Link></li>
            <li><Link className="dropdown-item" to="/Science">Science</Link></li>
            <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>      
  
    
      </>
    )
  }
}

export default Navbar
