import React from 'react';

interface InputProps {
    label: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ label, name }) => {

    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mr-2">{label}</label>
        </div>
    );
};

export default Input;
