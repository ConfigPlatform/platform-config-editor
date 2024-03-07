import React from 'react';
import {FC} from 'react';

interface IProps {
    name: string,
    type?: string,
    dataType?: any
}

const ColumnComponent: FC<IProps> = ({name, type, dataType }) => {
    return (
        <div>
            {name}
        </div>
    );
};

export default ColumnComponent;