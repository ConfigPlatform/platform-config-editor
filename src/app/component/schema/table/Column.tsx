import React from 'react';
import {FC} from 'react';

interface IProps {
    label : string,
    name: string,
    type: string,
    dataType: any
}

const ColumnComponent: FC<IProps> = ({ label, name, type, dataType }) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mr-2">{label}</label>
        </div>
    );
};

export default ColumnComponent;