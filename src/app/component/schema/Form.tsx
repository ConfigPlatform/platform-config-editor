import React from 'react';
import Input from './Input';
import Type from './Type';
import {get} from "lodash";

interface IField {
    name: string;
    label: string;
    type: string;
    required?: boolean;
    pattern?: string;
    className?: string;
}

interface IFormProps {
    id: string;
    fields: IField[];
}

const Form: React.FC<IFormProps> = (props) => {
    const formId = get(props, 'id', '');
    const fields = get(props, 'fields', []);

    // Define base height for padding, etc.
    const baseHeight = 40; // Adjust based on your design
    // Define height per field
    const heightPerField = 60; // Adjust based on your design
    // Calculate dynamic height
    const dynamicHeight = baseHeight + (fields.length * heightPerField);

    return (
        <div
            className="border-dashed border-2 border-sky-500 rounded-md flex flex-col p-2"
            style={{width: '200px', height: `${dynamicHeight}px`}} // Set the dynamic height here
        >
            <div className="self-start mb-1">
                <p>{formId}</p>
            </div>
            {fields.map((field, index) => (
                <div key={index} className="flex flex-col gap-2 mb-3">
                    <div className="flex items-center justify-between">
                        <div style={{width: '100px', height: '50px'}}
                             className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center mr-2">
                            <Input label={field.label} name={field.name} />
                        </div>
                        <div style={{width: '100px', height: '50px'}}
                             className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center">
                            <Type label={field.type}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Form;
