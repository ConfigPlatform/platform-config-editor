import React from 'react';
import Column from './Column';
import { get } from 'lodash';

interface Icolumns {
  type: 'container',
  className: string,
  name: string,
  sortable: boolean,
  cell: {
    className: string,
    content: {
      type: string,
      value: string,
      vars: {
        id: string
      }
    }[]
  }
}

const FormLayoutComponent = (props: any) => {
  const columns: Icolumns[] = get(props, 'columns', []);

  return (
    <div className="border-dashed border-2 border-sky-500 rounded-md flex flex-col p-2 w-10/12">
      {/* "Table" в левом верхнем углу */}
      <div className="self-start mb-4">
        <p>Table</p>
      </div>

      {/* Контейнер для колонок */}
      <table className="relative flex items-center w-full justify-evenly">
        {columns.map((el) => (
          <div key={el.name} className="flex items-center">
            <div className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center p-2 min-w-24">
              <Column name={el.name} />
            </div>
          </div>
        ))}
      </table>
    </div>
  );
};

export default FormLayoutComponent;
