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
    <ComponentSelect path={path} className={'m-1 p-1 flex-1 border border-dashed border-teal-500'}>
      <BlockLabel label={`Column ${name}`} />
      <ElementListRenderer content={content} path={`${path}.content`} />
    </ComponentSelect>
  );
};

export default Column;
