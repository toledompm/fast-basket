import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <div className="ui large menu green">
            <Link className="item" to="/">
                <img src={logo} alt="Fast Basket"/>
            </Link>
            <div class="right menu">
                <div class="item">
                    <button className="ui small button positive">Cadastrar-se</button>
                </div>
            </div>
        </div>
    );
};

export default Header;