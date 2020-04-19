import React, {Component} from 'react'
import history from '../../history'
import StoreForm from '../Form/StoreForm';

class StoreCreate extends Component {
    handleCreate(formValues) {
        console.log(formValues)
        if (formValues) {
            history.push('/dashboard');
        }
    }
    render() {
        return (
            <div className="ui container">
                <h1>Cadastro de Loja</h1>
                <StoreForm onSubmit={this.handleCreate}/>
            </div>
        )
    }
}


export default StoreCreate;
