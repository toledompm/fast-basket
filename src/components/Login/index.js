import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button';
import logo from '../../assets/logo.svg';

class Login extends Component {
    render() {
        return (
            <div className="ui container">
                <img src={logo} className="ui small image centered aligned" alt="Fast Basket"/>
                <h3>Portal do Parceiro</h3>
                <p>Atualize seu catálogo de jeito rápido e fácil</p>
                <input type="text" placeholder="Usuário"/>
                <input type="text" placeholder="Senha"/>
                <Link to="/reset-password">
                    Esqueci meu e-mail ou senha
                </Link>
                <Button className="green">Entrar</Button>
                <h4>
                    Ainda não possui cadastro?
                    <Link to="/register">
                        <span></span>
                        Cadastre-se
                    </Link>
                </h4>
            </div>
        )
    };
}

export default Login;
