import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

const Footer = () => {
    return (
        <footer className="ui bottom small menu green ">
            <div className="right menu">
                <div className="item">
                    <Link to="/" className="ui button positive">
                        <h3>FAQ</h3>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
