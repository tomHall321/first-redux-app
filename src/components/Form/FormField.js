import React from "react";

const FormField = ({ name, label, type, handleChange, value }) => {
    return (
        <div className="mb-4">
            <label htmlFor={ name }>{ label }</label>
            <input 
                className="form-control"
                id={ name }
                type={ type }
                onChange={ handleChange }
                value={ value } 
            />
        </div>
    )
};

export default FormField;