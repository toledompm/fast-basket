import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.css'
import CatalogList from './list'
import {testData} from '../../reducers/productReducer';

class Catalog extends Component {
    render() {
        return (
            <div className="ui container">
                <CatalogList products={testData}/>
                <button className="green"> Ver carrinho </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
