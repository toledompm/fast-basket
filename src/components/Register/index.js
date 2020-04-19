import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import RegisterForm from '../Form/RegisterForm';
import {connect} from 'react-redux';
import {smsSend} from '../../actions/index'

class Register extends Component {

    handleRegister = (formValues) => {
        if (formValues) {
            const {
                username,
                password,
                whatsapp = '+55' + formValues.whatsapp
            } = formValues;
            this
                .props
                .smsSend({username, whatsapp, password});
        }
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
                        <RegisterForm onSubmit={this.handleRegister}/>
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

export default connect(null, {smsSend})(Register);
