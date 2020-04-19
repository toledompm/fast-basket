import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class ProductCreate extends Component {
    render() {
        return (
            <div className="ui container">
                <h3>Cadastro de Produto</h3>
                <input type="text" placeholder="Nome"/>
                <input type="file" placeholder="Imagem"/>
                <textarea placeholder="Descrição"/>
                <Link to={`/store/${this.props.storeId}`}>
                    <button className="green">Salvar</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreate)
