import React from 'react';
import {FC} from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import {get} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import {IContent} from '@/app/component/structure/navbar/NavbarStructure';

export interface IColumn {
  name: string;
  path: string;
  content: IContent;
}

const Column: FC<IColumn> = (props) => {
  const name = get(props, 'name', '');
  const path = get(props, 'path', '');
  const content = get(props, 'content', '');

  return (
    <div className={'mx-1 m-2'}>
      <ComponentSelect path={path}>
        <div className={'border-dashed border border-teal-500 p-1'}>
          <BlockLabel label={'Column'} />
          <p className={'text-sm'}>{name}</p>
          <ElementListRenderer content={content} path={`${path}.content`} />
        </div>
      </ComponentSelect>
    </div>
  );
};

export default Column;
