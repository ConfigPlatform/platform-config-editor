import {get} from 'lodash';
import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';

interface IText {
  path: string;
  content: object[];
  select: string;
}

const DataContext = (props: IText) => {
  const path = get(props, 'path', '');
  const content = get(props, 'content', []);
  const select = get(props, 'select', '');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-sky-500 w-full'}>
      <BlockLabel label={`DataContext - ${select}`} />
      <ElementListRenderer content={content} path={`${path}.content`} />
    </ComponentSelect>
  );
};

export default DataContext;
