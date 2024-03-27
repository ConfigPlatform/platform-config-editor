import React from 'react';
import {IColumn} from './Column';
import BlockLabel from '@/app/component/schema/BlockLabel';
import {get} from 'lodash';
import ColumnList from '@/app/component/schema/page/table/ColumnList';
import Draggable from '@/app/component/wrapper/Draggable';
import DefineDraggableComponent from '@/app/component/wrapper/DefineDraggableComponent';

interface ITable {
  select: string;
  columns: IColumn[];
  path: string;
  draggable: boolean;
}

const TablePreview = (props: ITable) => {
  const select = get(props, 'select', '');
  const columns: IColumn[] = get(props, 'columns', []);
  const path = get(props, 'path', '');

  return (
    <div className={'w-full pr-4'}>
      <div className={'m-2 border-dashed border border-blue-500 p-1 w-full bg-gray-300'}>
        <BlockLabel label={`Table ${select}`} />
        <ColumnList columns={columns} path={path} preview={true} />
      </div>
    </div>
  );
};

const TableDraggable = (props: ITable) => {
  const select = get(props, 'select', '');
  const columns: IColumn[] = get(props, 'columns', []);
  const path = get(props, 'path', '');

  return (
    <div className={'w-full pr-4'}>
      <Draggable path={path} className={'m-2 border-dashed border border-blue-500 p-1 w-full'}>
        <BlockLabel label={`Table ${select}`} />
        <ColumnList columns={columns} path={path} preview={false} />
      </Draggable>
    </div>
  );
};

const Table = (props: ITable) => (
  <DefineDraggableComponent
    componentProps={props}
    ComponentPreview={TablePreview}
    ComponentDraggable={TableDraggable}
  />
);

export default Table;
