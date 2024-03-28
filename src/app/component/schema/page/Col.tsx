import React, {ReactNode} from 'react';
import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import BlockLabel from '@/app/component/schema/BlockLabel';
import Draggable from '@/app/component/wrapper/Draggable';
import DefineDraggableComponent from '@/app/component/wrapper/DefineDraggableComponent';

interface ICol {
  children: ReactNode;
  path: string;
  preview: boolean;
}

const ColPreview: React.FC<ICol> = (props) => {
  const content = get(props, 'content', []);
  const path = get(props, 'path', '');

  const colWidth = get(props, 'width', 'w-full');
  const elementWidth: string = (+colWidth / 12) * 100 - 1.7 + '%';

  return (
    <div className={'m-2 border-dashed border border-indigo-500 p-1 bg-gray-300'} style={{width: elementWidth}}>
      <BlockLabel label={'Col'} />
      <ElementListRenderer content={content} path={`${path}.content`} preview={true} />
    </div>
  );
};

const ColDraggable: React.FC<ICol> = (props) => {
  const content = get(props, 'content', []);
  const path = get(props, 'path', '');

  const colWidth = get(props, 'width', 'w-full');
  const elementWidth: string = (+colWidth / 12) * 100 - 1.7 + '%';

  return (
    <Draggable path={path} className={'m-2 border-dashed border border-indigo-500 p-1'} style={{width: elementWidth}}>
      <BlockLabel label={'Col'} />
      <ElementListRenderer content={content} path={`${path}.content`} preview={false} />
    </Draggable>
  );
};

const Col = (props: ICol) => (
  <DefineDraggableComponent componentProps={props} ComponentPreview={ColPreview} ComponentDraggable={ColDraggable} />
);

export default Col;
