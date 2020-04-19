import React, {Component} from 'react'
import StoreItem from './item';

class StoreList extends Component {

    renderList() {
        return this
            .props
            .stores
            .map(item => <StoreItem key={item.id} item={item}/>);
    }

    render() {
        console.log(this.props.stores)
        if (!this.props.stores) {
            return null;
        }

        return <div className="ui raised segments">{this.renderList()}</div>
    }
}
export default StoreList;
