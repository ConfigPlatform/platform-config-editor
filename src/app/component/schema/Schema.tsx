'use client';

import useConfigurationStore from '@/app/store/configurationStore';
import {get} from 'lodash';
import schemaMap from '@/app/component/schema/schemaMap';

export const defineScope = (path: string): string | undefined => {
  const scopes: string[] = ['page', 'entity', 'footer', 'navbar', 'sidepanel', 'handler', 'entity'];

  for (const scope of scopes) {
    if (path.includes(scope)) return scope;
  }
};

const Schema = () => {
  const structurePath = useConfigurationStore((state) => state.structurePath);

  const entries = useConfigurationStore((state) => get(state, `configuration.${structurePath}`));

  const scope = defineScope(structurePath);

  const SchemaRenderer = schemaMap[scope!];

  return (
    <div className={'w-8/12 flex items-start justify-start flex-col p-2 overflow-y-auto overflow-x-hidden h-screen'}>
      {SchemaRenderer ? <SchemaRenderer element={entries} path={structurePath} /> : null}
    </div>
  );
};

export default Schema;
