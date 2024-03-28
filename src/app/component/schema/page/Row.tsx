import React from 'react';
import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import BlockLabel from '@/app/component/schema/BlockLabel';
import DefineDraggableComponent from '@/app/component/wrapper/DefineDraggableComponent';
import Draggable from '@/app/component/wrapper/Draggable';

interface IRow {
  content: object[];
  path: string;
  preview: boolean;
}

const RowPreview = (props: IRow) => {
  const content = get(props, 'content', []);
  const path = get(props, 'path', '');

  return (
    <div className={'w-full pr-4'}>
      <div className={'m-2 w-full flex flex-wrap border-dashed border border-emerald-500 p-1 bg-gray-300'}>
        <BlockLabel label={'Row'} />
        <ElementListRenderer content={content} path={`${path}.content`} preview={true} />
      </div>
    </div>
  );
};

const RowDraggable = (props: IRow) => {
  const content = get(props, 'content', []);
  const path = get(props, 'path', '');

  return (
    <Draggable path={path} className={'w-full pr-4'}>
      <div className={'m-2 w-full flex flex-wrap border-dashed border border-emerald-500 p-1'}>
        <BlockLabel label={'Row'} />
        <ElementListRenderer content={content} path={`${path}.content`} strategy={'horizontal'} preview={false} />
      </div>
    </Draggable>
  );
};

const Row = (props: IRow) => (
  <DefineDraggableComponent componentProps={props} ComponentPreview={RowPreview} ComponentDraggable={RowDraggable} />
);

export default Row;
