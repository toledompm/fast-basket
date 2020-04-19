import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './style.css';

const Header = () => {
    return (
        <div className="ui small menu green">
            <Link className="item" to="/">
                <label className="title">FastBasket</label>
                <img src={logo} alt="FastBasket"/>
            </Link>

            <div className="right menu">
                <div className="item">
                    <button className="ui button positive">
                        Ajuda
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;