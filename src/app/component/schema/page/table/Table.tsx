import React from 'react';
import Column, {IColumn} from './Column';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface ITable {
  select: string;
  columns: IColumn[];
}

const Table = ({select, columns}: ITable) => {
  return (
    <div className="border-dashed border border-blue-500 p-1 m-2">
      <BlockLabel label={'Table'} />

      <p className={'text-sm my-1'}>Select: {select}</p>

      {/* Контейнер для колонок */}
      <div className="flex flex-row">
        {columns.map((el, i) => (
          <Column key={i} name={el.name} />
        ))}
      </div>
    </div>
  );
};

export default Table;
