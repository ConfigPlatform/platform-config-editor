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
    <div className={'w-full pr-4'}>
      <ComponentSelect path={path} className={'m-2 border-dashed border border-blue-500 p-1 w-full'}>
        <BlockLabel label={`Table ${select}`} />
        <ColumnList columns={columns} path={path} />
      </ComponentSelect>
    </div>
  );
};

export default Table;
