import React from 'react';
import {FC} from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';

export interface IColumn {
  name: string;
  type?: string;
  dataType?: any;
}

const Column: FC<IColumn> = ({name}) => {
  return (
    <div className={'border-dashed border border-blue-600 p-1 m-2'}>
      <BlockLabel label={'Column'} />
      {name}
    </div>
  );
};

export default Column;
