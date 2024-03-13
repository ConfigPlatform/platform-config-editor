import {get} from 'lodash';
import React from 'react';
import Cell, {ICell} from '@/app/component/schema/page/table/Cell';

interface IProps {
  path: string;
  cells: ICell[];
}

const CellList = (props: IProps) => {
  const columns: ICell[] = get(props, 'cells', []);
  const path = get(props, 'path', '');

  return (
    <div className="flex flex-row">
      {columns.map((el, i) => (
        <Cell key={i} name={el.name} path={`${path}.columns[${i}]`} />
      ))}
    </div>
  );
};

export default CellList;
