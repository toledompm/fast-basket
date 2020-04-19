import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './style.css';

const Header = () => {
    return (
        <div className="ui small menu green">
            <Link className="item" to="/">
                <img src={logo} alt="FastBasket"/>
            </Link>
            <label className="title">FastBasket</label>
            <div className="right menu">
                <div className="item">
                    <button className="ui icon button">
                        <i className="help icon"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;