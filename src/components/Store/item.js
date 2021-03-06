import React, {Component} from 'react';
import history from '../../history';
import { Link } from 'react-router-dom';

export class StoreItem extends Component {
    render() {
        if (!this.props.item) {
            return null;
        }
        const {name, phone, lengthOfCatalogs} = this.props.item;
        return (
            <div className="item" onClick={() => history.push(`/store/${this.props.item.id}`)}>
                <div className="right floated content">
                    <Link to="/store/edit/1" className="ui small button primary">
                        <i className=" edit icon"></i>
                        Alterar
                    </Link>
                </div>
                <div className="right floated content">
                    <Link to="/products" className="ui small button secondary">
                        <i className="cart icon"></i>
                        Produtos
                    </Link>
                </div>
                <div className="content">
                    <h3 className="header">{name}</h3>
                    <p className="price">{lengthOfCatalogs + ' '}
                        produtos</p>
                    <h5 className="description">
                        Telefone para contato {phone}
                    </h5>
                </div>
            </div>
        )
    }
}

export default StoreItem;
