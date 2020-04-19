import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class StoreCreate extends Component {
    render() {
        return (
            <div className="ui container">
                <h1>Cadastro de Loja</h1>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="WhatsApp"/>
                <Link to="/dashboard">
                    <button className="green">Salvar</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StoreCreate)
