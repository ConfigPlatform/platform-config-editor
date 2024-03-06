'use client';

import useConfigurationStore from '@/app/store/configurationStore';
import {get} from 'lodash';
import ElementRenderer from '@/app/component/schema/ElementRenderer';

const ComponentSchema = () => {
  const selectedElement = useConfigurationStore((state) => get(state, 'selectedElement', {}));

  return (
    <div className={'w-8/12 flex items-start justify-start p-2'}>
      <ElementRenderer element={selectedElement} />
    </div>
  );
};

export default ComponentSchema;
