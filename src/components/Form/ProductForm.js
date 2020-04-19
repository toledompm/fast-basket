import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class ProductForm extends Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, type, meta}) => {
        const className = `pure-material-textfield-outlined ${meta.error && meta.touched
            ? 'error'
            : ''}`;
        return (
            <label className={className}>
                <input {...input} type={type} placeholder=" " autoComplete="off"/>
                <span>{label}</span>{this.renderError(meta)}
            </label>
        );
    }

    adaptFileEventToValue = delegate => e => delegate(e.target.files[0])

    FileInput = ({
        input: {
            value: omitValue,
            onChange,
            onBlur,
            ...inputProps
        },
        label,
        meta,
        ...props
    }) => {
        const className = `pure-material-textfield-outlined ${meta.error && meta.touched
            ? 'error'
            : ''}`;
        return (
            <label className={className}>
                <input
                    onChange={this.adaptFileEventToValue(onChange)}
                    onBlur={this.adaptFileEventToValue(onBlur)}
                    type="file"
                    {...inputProps}
                    {...props}/>
                <span>{label}</span>
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
                <Field name="name" component={this.renderInput} label="Nome"/>
                <Field name="image" component={this.FileInput} label="Imagem"/>
                <Field name="description" component={this.renderInput} label="Descrição"/>
                <Field name="price" component={this.renderInput} label="Preço"/>
                <button className="green">Salvar</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.name) {
        errors.name = 'Preencha o nome do produto';
    }
    if (!formValues.description) {
        errors.description = 'Preencha a descrição do produto';
    }
    if (!formValues.price) {
        errors.price = 'Preencha o preço do produto';
    }

    return errors;
};

export default reduxForm({form: 'productForm', validate})(ProductForm);