import React from 'react';
import {FC} from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import {get} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';

export interface ICell {
  name: string;
  path: string;
}

const Cell: FC<ICell> = (props) => {
  const name = get(props, 'name', '');
  const path = get(props, 'path', '');

  return (
    <div className={'mx-1 m-2'}>
      <ComponentSelect path={path}>
        <div className={'border-dashed border border-teal-500 p-1'}>
          <BlockLabel label={'Cell'} />
          <p className={'text-sm'}>{name}</p>
        </div>
      </ComponentSelect>
    </div>
  );
};

export default Cell;
