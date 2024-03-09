import React from 'react';
import Column from './Column';
import {get} from 'lodash';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IColumns {
  type: 'container';
  className: string;
  name: string;
  sortable: boolean;
  cell: {
    className: string;
    content: {
      type: string;
      value: string;
      vars: {
        id: string;
      };
    }[];
  };
}

const FormLayoutComponent = (props: any) => {
  const columns: IColumns[] = get(props, 'columns', []);

  return (
    <div className="border-dashed border border-blue-500 p-1 m-2">
      <BlockLabel label={'Table'} />

      {/* Контейнер для колонок */}
      <div className="flex flex-row">
        {columns.map((el, i) => (
          <Column key={i} name={el.name} />
        ))}
      </div>
    </div>
  );
};

export default FormLayoutComponent;
