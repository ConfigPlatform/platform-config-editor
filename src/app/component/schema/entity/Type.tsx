import {get} from 'lodash';
import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';

const Type = ({name, type, path}) => {
  return (
    <ComponentSelect path={path} className="m-2 p-1 border-dashed border border-orange-500">
      <BlockLabel label={`Type: ${type}`} />
      <p className="text-sm">{name}</p>
    </ComponentSelect>
  );
};
export default Type;
