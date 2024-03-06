'use client';

import useConfigurationStore from '@/app/store/configurationStore';
import {get} from 'lodash';
import schemaMap from '@/app/component/schema/schemaMap';

const Schema = () => {
  const selectedElement = useConfigurationStore((state) => get(state, 'selectedElement', {}));
  const schema = get(selectedElement, 'structure', '');

  const SchemaRenderer = schemaMap[schema];

  return (
    <div className={'w-8/12 flex items-start justify-start flex-col p-2'}>
      {SchemaRenderer ? <SchemaRenderer element={selectedElement} /> : null}
    </div>
  );
};

export default Schema;
