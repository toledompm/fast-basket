import React, {Component} from 'react'
import ProductItem from './item';

class ProductList extends Component {

    renderList() {
        return this
            .props
            .products
            .map(item => <ProductItem key={item.id} item={item}/>);
    }

    render() {
        if (!this.props.products) {
            return null;
        }

        return <div className="ui middle aligned divided list">{this.renderList()}</div>
    }
}
export default ProductList;
