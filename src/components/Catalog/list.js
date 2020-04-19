import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.css'
import CatalogItem from './item'

class CatalogList extends Component {
    renderList() {
        return this
            .props
            .products
            .map(product => {
                return <CatalogItem item={product}/>
            })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogList)
