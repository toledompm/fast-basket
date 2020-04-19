import React, {Component} from 'react'
import {connect} from 'react-redux'
import ProductForm from '../Form/ProductForm'
import history from '../../history'

class ProductCreate extends Component {
    handleCreate(formValues) {
        if (formValues) {
            history.push(`/store/${this.props.storeId}`);
        }
    }

    render() {
        return (
            <div className="ui container">
                <h3>Cadastro de Produto</h3>
                <ProductForm onSubmit={this.handleCreate}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreate)
