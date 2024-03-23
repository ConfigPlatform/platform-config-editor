import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import {get} from 'lodash';

interface IColumn {
  name: string;
  type: string;
  options: object;
  path: string;
}

const Column = ({name, path, options, type}: IColumn) => {
  const columnType = get(options, 'type', '');

  return (
    <ComponentSelect path={path} className="m-2 p-1 border-dashed border border-orange-500">
      <BlockLabel label={`Type: ${columnType || type}`} />
      <p className="text-sm">{name}</p>
    </ComponentSelect>
  );
};
export default Column;
