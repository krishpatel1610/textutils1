import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar(props){
    return ( 
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand activate"  to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
            <div className={`form-check form-switch ${props.mystyle} `}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleGreen} id="flexSwitchCheckChecked"  />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked" onClick={props.toggleGreen}>Enable green dark mode</label>
              </div>
              <div className={`form-check form-switch ${props.mystyle} `}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckChecked" />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked" onClick={props.toggleMode} >Enable dark mode</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    )
}
NavBar.propTypes =  { 
    title: PropTypes.string,
    aboutText: PropTypes.string
}

 