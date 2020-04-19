import React, {Component} from 'react'

export class StoreItem extends Component {
    render() {
        if (!this.props.item) {
            return null;
        }
        const {name, phone, lengthOfCatalogs} = this.props.item;
        return (
            <div class="ui segment">
                <div class="middle content">
                    <h3 class="header">{name}</h3>
                    <p class="meta">
                        <span class="price">{lengthOfCatalogs + ' '}
                            produtos</span>
                    </p>
                    <h5 class="description">
                        Telefone para contato {phone}
                    </h5>
                </div>
            </div>
        )
    }
}

export default StoreItem;
