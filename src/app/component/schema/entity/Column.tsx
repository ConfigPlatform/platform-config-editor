import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import {get} from 'lodash';

interface IColumn {
  name: string;
  options: object;
  path: string;
}

const Column = ({name, path, options}: IColumn) => {
  const columnType = get(options, 'type', '');
  const relationType = get(options, 'relationType', '');

  return (
    <ComponentSelect path={path} className="m-2 p-1 border-dashed border border-orange-500">
      <BlockLabel label={`Type: ${columnType || relationType}`} />
      <p className="text-sm">{name}</p>
    </ComponentSelect>
  );
};
export default Column;
