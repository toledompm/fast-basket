import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Auth extends Component {
    handleLogin() {
        console.log('login')
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
            <div className="ui container center aligned">
                <h1>Verificação do Celular</h1>
                <p>Insira o código de 4 dígitos enviado para o número {this.props.whatsapp}
                    .
                </p>
                <div className="ui grid center aligned">
                    <div className="two wide column">
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
                    <div className="two wide column">
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
                    <div className="two wide column">
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
                    <div className="two wide column">
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
                        <a>
                            Reenviar</a>
                    </h5>

                    <br/>
                </div>
                <button className="green">Enviar</button>
                <div className="centered aligned">
                    <br/>
                    <h5>Errou seu número ?
                        <a>
                            Voltar</a>
                    </h5>
                    <br/>
                </div>
            </div>
        )
    }
}

export default connect()(Auth);
