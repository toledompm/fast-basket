import React, {Component} from 'react';
import StoreList from '../Store/list'
import {connect} from 'react-redux';
import {fetchStores} from '../../actions/index';
import {testData} from '../../reducers/storeReducer';
import {Link} from 'react-router-dom';
class Dashboard extends Component {
    componentDidMount() {
        this
            .props
            .fetchStores();
    }

    render() {
        return (
            <div className="ui container ">
                <div className="centered aligned">
                    <p>Cadastre seus produtos online e compartilhe sua lojas nas redes sociais</p>
                </div>
                <StoreList stores={testData}/>
                <Link to='/store/create'>
                    <button className="green"><i className="add icon"/>
                    </button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stores: Object.keys(state.stores)
    }
};

export default connect(mapStateToProps, {fetchStores})(Dashboard);
