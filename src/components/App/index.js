import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.svg';

class App extends Component {
    render() {
        return (
            <div className="ui center aligned container">
                <div className="header">
                    <img src={logo} className="ui small image centered aligned" alt="Fast Basket"/>
                </div>
                <div className="description">
                    <h1>Crie agora mesmo seu catálogo virtual!</h1>
                    <p>Cadastre seu catálogo online e compartilhe nas redes sociais</p>
                    <Link to="/register">
                        <button className="green">Cadastre-se</button>
                    </Link>
                    <Link to="/login">
                        <button className="low-green">Já tem uma conta? Faça login</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default App;
