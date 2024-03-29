import React from 'react';
import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';

interface IProps {
  content: object[];
  path: string;
}

const Row = (props: IProps) => {
  const content = get(props, 'content', []);
  const path = get(props, 'path', '');

  return (
    <div className={'w-full pr-4'}>
      <ComponentSelect path={path} className={'m-2 w-full flex flex-wrap border-dashed border border-emerald-500 p-1'}>
        <BlockLabel label={'Row'} />
        <ElementListRenderer content={content} path={`${path}.content`} />
      </ComponentSelect>
    </div>
  );
};

export default Row;
