import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';

export interface IInput {
  name: string;
  type: string;
}

const Input: React.FC<IInput> = ({name, type}) => {
  return (
    <div className="border-dashed border border-red-600 p-1 m-2">
      <BlockLabel label={`Input ${type}`} />
      <p className={'text-sm'}>{name}</p>
    </div>
  );
};

export default Input;
