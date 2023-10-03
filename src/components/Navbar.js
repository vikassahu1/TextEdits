import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <>

            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>       
                            <label htmlFor="flexSwitchCheckDefault" className="form-check-label">{props.navtext}</label>
                            <input type="checkbox" onClick={props.toggleMode} className="form-check-input" id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string,
    about: PropTypes.string
};

Navbar.defaultProps = {
    about: 'Stranger'
};
