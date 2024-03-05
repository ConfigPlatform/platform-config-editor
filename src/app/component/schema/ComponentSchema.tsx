'use client';

import useConfigurationStore from '@/app/store/configurationStore';
import {get} from 'lodash';
import ElementRenderer from '@/app/component/schema/ElementRenderer';

const ComponentSchema = () => {
  const selectedElement = useConfigurationStore((state) => get(state, 'selectedElement', {}));

  return (
    <div className="w-8/12 ml-5 mt-5">
      <ElementRenderer element={selectedElement} />
    </div>
  );
};

export default ComponentSchema;
