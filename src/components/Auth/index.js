import React, {Component} from 'react';
import {connect} from 'react-redux';
import history from '../../history';
import './style.css'
class Auth extends Component {
    componentDidMount() {
        console.log(this.props)
        console.log(this.state)
    }

    handleLogin() {
        history.push('/dashboard', this.state);
    }

    onInputChange(target) {
        switch (target.id) {
            case "first":
                document
                    .getElementById("second")
                    .focus();
                break;
            case "second":
                document
                    .getElementById("third")
                    .focus();
                break;
            case "third":
                document
                    .getElementById("fourth")
                    .focus();
                break;
            case "fourth":
                this.handleLogin();
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="authentication-container">
                <div className="content">
                    <div className="instructions">
                        <h1>Verificação do Celular</h1>
                        <p>Insira o código de 4 dígitos enviado para o número {this.props.whatsapp}.
                        </p>
                    </div>
                    <div className="authorization-code">
                        <div className="four-digits">
                            <div className="counter">
                                <input
                                    type="number"
                                    style={{
                                    textAlign: 'center'
                                }}
                                    onChange={e => this.onInputChange(e.target)}
                                    id="first"
                                    min="0"
                                    max="9"
                                    maxLength="1"/>
                            </div>
                            <div className="counter">
                                <input
                                    type="number"
                                    style={{
                                    textAlign: 'center'
                                }}
                                    onChange={e => this.onInputChange(e.target)}
                                    id="second"
                                    min="0"
                                    max="9"
                                    maxLength="1"/>
                            </div>
                            <div className="counter">
                                <input
                                    type="number"
                                    style={{
                                    textAlign: 'center'
                                }}
                                    onChange={e => this.onInputChange(e.target)}
                                    id="third"
                                    min="0"
                                    max="9"
                                    maxLength="1"/>
                            </div>
                            <div className="counter">
                                <input
                                    type="number"
                                    style={{
                                    textAlign: 'center'
                                }}
                                    onChange={e => this.onInputChange(e.target)}
                                    id="fourth"
                                    min="0"
                                    max="9"
                                    maxLength="1"/>
                            </div>
                        </div>
                        <div className="ui centered aligned">
                            <br/>
                            <h5>Não recebeu seu código ?
                                <a href="/auth">
                                    Reenviar</a>
                            </h5>
                            <br/>
                        </div>
                    </div>
                    <div className="helped">
                        <br/>
                        <h5>Errou seu número ?
                            <a onClick={() => history.goBack()}>
                                Voltar</a>
                        </h5>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Auth);
