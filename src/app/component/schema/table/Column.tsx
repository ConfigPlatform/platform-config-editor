import React from 'react';
import {FC} from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  name: string;
  type?: string;
  dataType?: any;
}

const ColumnComponent: FC<IProps> = ({name}) => {
  return (
    <div className={'border-dashed border border-cyan-500 p-1 m-1'}>
      <BlockLabel label={'Column'} />
      {name}
    </div>
  );
};

export default ColumnComponent;
