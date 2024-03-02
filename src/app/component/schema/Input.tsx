import React from 'react';

const InputComponent = ({ label, name, type, dataType }) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mr-2">{label}</label>
        </div>
    );
};

export default InputComponent;
