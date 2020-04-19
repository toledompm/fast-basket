import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import './style.css'
import logo from '../../assets/logo.svg';

class CatalogEdit extends Component {
    render() {
        return (
            <div className="product-container">
                <div className="content">
                    <img src={logo} className="ui image medium" alt="Imagem do produto"/>
                    <div className="toggether">
                        <h3>Nome do Produto</h3>
                        <p>Descrição do produto</p>
                    </div>
                    <div className="anotation">
                        <p>Alguma observação?</p>
                        <textarea
                            type=""
                            placeholder="Descrição"
                            style={{
                            height: 104
                        }}/>
                    </div>
                    <Link to="/store/1">
                        <button className="green">Adicionar ao carrinho</button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogEdit)
