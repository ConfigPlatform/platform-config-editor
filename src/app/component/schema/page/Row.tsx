import React from 'react';
import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import SortableList from '@/app/component/wrapper/SortableList';

interface IProps {
  content: object[];
  path: string;
}

const Row = (props: IProps) => {
  const content = get(props, 'content', []);
  const path = get(props, 'path', '');

  const itemPaths = content.map((el, i) => `${path}.content[${i}]`);

  return (
    <SortableList items={itemPaths} strategy={'horizontal'}>
      <div className={'w-full pr-4'}>
        <ComponentSelect
          path={path}
          className={'m-2 w-full flex flex-wrap border-dashed border border-emerald-500 p-1'}
        >
          <BlockLabel label={'Row'} />
          <ElementListRenderer content={content} path={`${path}.content`} />
        </ComponentSelect>
      </div>
    </SortableList>
  );
};

export default Row;
