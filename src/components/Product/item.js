import React, {Component} from 'react';
import history from '../../history';
import {Link} from 'react-router-dom';

export class ProductItem extends Component {
    render() {
        if (!this.props.item) {
            return null;
        }
        const {name, description, price} = this.props.item;

        const formatedPrice = Intl
            .NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
            .format(price);
        return (
            <div
                class="item"
                onClick={() => history.push(`/product/${this.props.item.id}`)}>
                <div className="right floated content">
                    <Link to="/" className="ui small button negative">
                        <i className=" trash icon"></i>
                        Excluir
                    </Link>
                </div>
                <div className="right floated content">
                    <Link to="/product/edit" className="ui small button primary">
                        <i className=" edit icon"></i>
                        Alterar
                    </Link>
                </div>
                <div class="left floated content">
                    <h3 class="header">{name}</h3>
                    <p class="price">{formatedPrice}</p>
                    <h5 class="description">
                        {description}
                    </h5>
                </div>
            </div>
        )
    }
}

export default ProductItem;
