import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg';

class Register extends Component {
    render() {
        return (
            <div className="ui container">
                <img src={logo} className="ui tiny image centered aligned" alt="Fast Basket"/>
                <h3>Cadastre seu negócio</h3>
                <p>Procurando organização? Fast Basket
                    <br/>
                    Cadastre e ganhe 1 mês de benefícios!
                </p>
                <input type="text" placeholder="Usuário"/>
                <input type="text" placeholder="Senha"/>
                <input type="text" placeholder="Whatsapp (com DDD)"/>
                <button className="green">Próximo</button>
                <h4>
                    Já possui cadastro?
                    <Link to="/login">
                        <span></span>
                        Entrar
                    </Link>
                </h4>
            </div>
        )
    }
}

export default Register;
