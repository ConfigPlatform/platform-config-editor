import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import {get} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';

export interface IInput {
  label: string;
  type: string;
  path: string;
}

const Input: React.FC<IInput> = (props) => {
  const label = get(props, 'label', '');
  const type = get(props, 'type', '');
  const path = get(props, 'path', '');

  return (
    <div className={'m-2'}>
      <ComponentSelect path={path}>
        <div className={'border-dashed border border-green-500 p-1'}>
          <BlockLabel label={`Field ${type}`} />
          <p className={'text-sm'}>{label}</p>
        </div>
      </ComponentSelect>
    </div>
  );
};

export default Input;
