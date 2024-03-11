import React from 'react';
import {IColumn} from './Column';
import BlockLabel from '@/app/component/schema/BlockLabel';
import {get} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import ColumnList from '@/app/component/schema/page/table/ColumnList';

interface ITable {
  select: string;
  columns: IColumn[];
  path: string;
}

const Table = (props: ITable) => {
  const select = get(props, 'select', '');
  const columns: IColumn[] = get(props, 'columns', []);
  const path = get(props, 'path', '');

  return (
    <div className={'m-2'}>
      <ComponentSelect path={path}>
        <div className={'border-dashed border border-blue-500 p-1'}>
          <BlockLabel label={'Table'} />
          <p className={'text-sm my-1'}>Select: {select}</p>
          <ColumnList columns={columns} path={path} />
        </div>
      </ComponentSelect>
    </div>
  );
};

export default Table;
