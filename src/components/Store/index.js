import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/index';
import ProductList from '../Product/list';
import {testData} from '../../reducers/productReducer';
import {Link} from 'react-router-dom';

class Store extends Component {
    componentDidMount() {
        this
            .props
            .fetchProducts();
    }

    render() {
        return (
            <div className="ui container">
                <h1>Lista de Produtos</h1>
                <ProductList products={this.props.products ?? testData}/>

                <div className="ui grid row">
                    <div className="eight wide column">
                        <Link to='/product/new'>
                            <button className="green"><i className="add icon"/>
                                Novo produto
                            </button>
                        </Link>
                    </div>
                    <div className="eight wide column">
                        <Link to='/product/new'>
                            <button className="green"><i className="whatsapp icon"/>
                                Compartilhar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = {
    fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)
