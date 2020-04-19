import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.css'
import history from '../../history';
import img from '../../assets/logo.svg';

class CatalogItem extends Component {
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
                className="item ui segment"
                onClick={() => history.push(`/catalog/item/${this.props.item.id}`)}
                style={{
                margin: '1px'
            }}>
                <div className="ui container">
                    <div className="left floated content">
                        <h3 className="header">{name}</h3>
                        <p className="price">{formatedPrice}</p>
                        <h5 className="description">
                            {description}
                        </h5>
                    </div>
                    <div className="right floated content">
                        <img src={img} className="ui image small" alt="img"/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem)
