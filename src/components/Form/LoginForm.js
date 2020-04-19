import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class LoginForm extends Component {
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
        this
            .props
            .onSubmit(formValues);
    }

    render() {
        return (
            <form
                onSubmit={this
                .props
                .handleSubmit(this.onSubmit)}>
                <Field name="username" component={this.renderInput} label="Usuário"/>
                <Field name="password" component={this.renderInput} label="Senha"/>
                <button className="green">Entrar</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.username) {
        errors.username = 'Preencha seu nome de usuário';
    }
    if (!formValues.password) {
        errors.password = 'Preencha sua senha';
    }
    return errors;
};

export default reduxForm({form: 'loginForm', validate})(LoginForm);