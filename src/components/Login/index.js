import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../Form/LoginForm';
import history from '../../history';

class Login extends Component {
    handleLogin(formValues) {
        if(formValues) {
            history.push('/dashboard')
        }
    }
    render() {
        return (
            <div className="ui container">
                <h3>Portal do Parceiro</h3>
                <p>Atualize seu catálogo de jeito rápido e fácil</p>
                <LoginForm onSubmit={this.handleLogin}/>
                <Link to="/reset-password">
                    Esqueci meu e-mail ou senha
                </Link>
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
