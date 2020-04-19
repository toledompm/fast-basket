import React, {Component} from 'react';
import StoreList from '../Store/list'
import {connect} from 'react-redux';
import {fetchStores} from '../../actions/index';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchStores();
    }

    render() {
        return (<StoreList/>)
    }
}

const mapStateToProps = state => {
    return {stores: state.stores}
};

export default connect(mapStateToProps, {fetchStores})(Dashboard);
