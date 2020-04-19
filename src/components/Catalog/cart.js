import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.css'

class CatalogCart extends Component {
    render() {
        return (
            <div className="product-container">
                <h1>Carrinho</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogCart)
