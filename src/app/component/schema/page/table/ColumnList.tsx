import Column, {IColumn} from '@/app/component/schema/page/table/Column';
import {get} from 'lodash';
import React from 'react';

interface IProps {
  path: string;
  columns: IColumn[];
}

const ColumnList = (props: IProps) => {
  const columns: IColumn[] = get(props, 'columns', []);
  const path = get(props, 'path', '');

  return (
    <div className="flex flex-row">
      {columns.map((el, i) => (
        <Column key={i} name={el.name} path={`${path}.columns[${i}]`} />
      ))}
    </div>
  );
};

export default ColumnList;
