import Column, {IColumn} from '@/app/component/schema/page/table/Column';
import {get} from 'lodash';
import React from 'react';
import DraggableList from '@/app/component/wrapper/DraggableList';
import DefineDraggableComponent from '@/app/component/wrapper/DefineDraggableComponent';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';

interface IProps {
  path: string;
  columns: IColumn[];
  preview: boolean;
}

const ColumnListPreview = (props: IProps) => {
  const columns: IColumn[] = get(props, 'columns', []);
  const path = get(props, 'path', '');

  const columnPaths = columns.map((_, i) => `${path}.columns[${i}]`);

  return (
    <div className="flex flex-row">
      {columns.map((el, i) => (
        <Column key={i} content={el.content} name={el.name} path={columnPaths[i]} preview={props.preview} />
      ))}
    </div>
  );
};

const ColumnListDraggable = (props: IProps) => {
  const columns: IColumn[] = get(props, 'columns', []);
  const path = get(props, 'path', '');

  const columnPaths = columns.map((_, i) => `${path}.columns[${i}]`);

  return (
    <div className="flex flex-row">
      <DraggableList id={path} strategy={'horizontal'} items={columnPaths}>
        {columns.map((el, i) => (
          <Column key={i} content={el.content} name={el.name} path={columnPaths[i]} preview={props.preview} />
        ))}
      </DraggableList>
    </div>
  );
};

const ColumnList = (props: IProps) => (
  <DefineDraggableComponent
    componentProps={props}
    ComponentPreview={ColumnListPreview}
    ComponentDraggable={ColumnListDraggable}
  />
);

export default ColumnList;
