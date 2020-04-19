import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class StoreForm extends Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `pure-material-textfield-outlined ${meta.error && meta.touched
            ? 'error'
            : ''}`;
        return (
            <label className={className}>
                <input {...input} placeholder=" " autoComplete="off"/>
                <span>{label}</span>{this.renderError(meta)}
            </label>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form
                onSubmit={this
                .props
                .handleSubmit(this.onSubmit)}>
                <Field name="name" component={this.renderInput} label="Name"/>
                <Field name="whatsapp" component={this.renderInput} label="WhatsApp com (DDD)"/>
                <button className="green">Salvar</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.name) {
        errors.name = 'Preencha o nome de sua Loja';
    }
    if (!formValues.whatsapp) {
        errors.whatsapp = 'Preencha seu número de WhatsApp';
    }

    return errors;
};

export default reduxForm({form: 'storeForm', validate})(StoreForm);