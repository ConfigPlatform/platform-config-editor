'use client';

import useConfigurationStore from '@/app/store/configurationStore';
import {get} from 'lodash';
import schemaMap from '@/app/component/schema/schemaMap';

const Schema = () => {
  const selected = useConfigurationStore((state) => get(state, 'selected', {}));

  const {scope, entries} = selected;

  const SchemaRenderer = schemaMap[scope];

  return (
    <div className={'w-8/12 flex items-start justify-start flex-col p-2'}>
      {SchemaRenderer ? <SchemaRenderer element={entries} /> : null}
    </div>
  );
};

export default Schema;
