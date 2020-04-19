import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import history from '../../history';
import './style.css'
import RegisterForm from '../Form/RegisterForm';

class Register extends Component {
    state = {
        username: null,
        password: null,
        whatsapp: null
    };

    handleRegister = () => {
        history.push('/auth', this.state);
    }

    render() {
        return (
            <div className="register-container">
                <div className="content">
                    <section>
                        <h1>Cadastre seu negócio</h1>
                        <p>Procurando organização? Fast Basket
                            <br/>
                            Cadastre e ganhe 1 mês de benefícios!
                        </p>

                    </section>
                    <div className="entry">
                        <RegisterForm onSubmit={this.handleRegister}/> {/* <form onSubmit={this.handleRegister}>
                            <label className="pure-material-textfield-outlined">
                                <input placeholder=" "/>
                                <span>Usuário</span>
                            </label>
                            <label className="pure-material-textfield-outlined">
                                <input placeholder=" "/>
                                <span>WhatsApp (com DDD)</span>
                            </label>
                            <label className="pure-material-textfield-outlined">
                                <input placeholder=" " type="password"/>
                                <span>Senha</span>
                            </label>
                            <button className="green" onClick={this.handleRegister}>Próximo</button>
                        </form> */}
                        <h4>
                            Já tem conta na FastBasket?
                            <Link to="/login">
                                <span>Entre</span>
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
