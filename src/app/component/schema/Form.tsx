import React from 'react';
import Input from './Input';
import Type from './Type';

const FormLayoutComponent = () => {
    return (
        <div className="border-dashed border-2 border-sky-500 rounded-md flex flex-col p-4" style={{width: '400px', height: '200px'}}>
            {/* Descriptive text positioned in the upper left corner */}
            <div className="self-start mb-4">
                <p>Form</p>
            </div>

            {/* Container for form elements, allowing each line of input and type to be aligned */}
            <div className="flex flex-col gap-2">
                {/* Input and Type for Name on the same line */}
                <div className="flex items-center">
                    <div style={{width: '100px', height: '50px'}}
                         className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center mr-2">
                        <Input label="Name" name="name" type="text"/>
                    </div>
                    <div style={{width: '100px', height: '50px'}}
                         className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center">
                        <Type label="String" name="String" type="text"/>
                    </div>
                </div>

                {/* Input and Type for Age on the next line */}
                <div className="flex items-center">
                    <div style={{width: '100px', height: '50px'}}
                         className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center mr-2">
                        <Input label="Age" name="age" type="text"/>
                    </div>
                    <div style={{width: '100px', height: '50px'}}
                         className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center">
                        <Type label="Number" name="number" type="text"/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default FormLayoutComponent;
