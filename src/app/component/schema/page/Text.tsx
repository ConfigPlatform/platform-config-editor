import {get} from 'lodash';
import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import Draggable from '@/app/component/wrapper/Draggable';
import DefineDraggableComponent from '@/app/component/wrapper/DefineDraggableComponent';

interface IText {
  value: string;
  path: string;
  preview: boolean;
}

const TextPreview = (props: IText) => {
  const value = get(props, 'value', '');

  return (
    <div className={'m-2 p-1 border-dashed border border-violet-500 bg-gray-300'}>
      <BlockLabel label={'Text'} />
      <p className={'text-sm'}>{value}</p>
    </div>
  );
};

const TextDraggable = (props: IText) => {
  const value = get(props, 'value', '');
  const path = get(props, 'path', '');

  return (
    <Draggable path={path} className={'m-2 p-1 border-dashed border border-violet-500'}>
      <BlockLabel label={'Text'} />
      <p className={'text-sm'}>{value}</p>
    </Draggable>
  );
};

const Text = (props: IText) => (
  <DefineDraggableComponent componentProps={props} ComponentPreview={TextPreview} ComponentDraggable={TextDraggable} />
);

export default Text;
