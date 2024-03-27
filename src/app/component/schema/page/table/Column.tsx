import React from 'react';
import {FC} from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import {IContent} from '@/app/component/structure/navbar/NavbarStructure';
import Draggable from '@/app/component/wrapper/Draggable';
import DefineDraggableComponent from '@/app/component/wrapper/DefineDraggableComponent';

export interface IColumn {
  name: string;
  path: string;
  content: IContent;
  preview: boolean;
}

const ColumnPreview: FC<IColumn> = (props) => {
  const name = get(props, 'name', '');
  const path = get(props, 'path', '');
  const content = get(props, 'content', '');

  return (
    <div className={'m-1 p-1 flex-1 border border-dashed border-teal-500 bg-gray-300'}>
      <BlockLabel label={`Column ${name}`} />
      <ElementListRenderer content={content} path={`${path}.content`} preview={true} />
    </div>
  );
};

const ColumnDraggable: FC<IColumn> = (props) => {
  const name = get(props, 'name', '');
  const path = get(props, 'path', '');
  const content = get(props, 'content', '');

  return (
    <Draggable path={path} className={'m-1 p-1 flex-1 border border-dashed border-teal-500'}>
      <BlockLabel label={`Column ${name}`} />
      <ElementListRenderer content={content} path={`${path}.content`} preview={false} />
    </Draggable>
  );
};

const Column = (props: IColumn) => (
  <DefineDraggableComponent
    componentProps={props}
    ComponentPreview={ColumnPreview}
    ComponentDraggable={ColumnDraggable}
  />
);

export default Column;
