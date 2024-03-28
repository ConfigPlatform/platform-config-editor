import {get} from 'lodash';
import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import Draggable from '@/app/component/wrapper/Draggable';
import DefineDraggableComponent from '@/app/component/wrapper/DefineDraggableComponent';

interface ILink {
  text: string;
  href: string;
  path: string;
  preview: boolean;
}

const LinkPreview = (props: ILink) => {
  const text = get(props, 'text', '');
  const href = get(props, 'href', '');

  return (
    <div className={'m-2 p-1 border-dashed border border-orange-500 bg-gray-300'}>
      <BlockLabel label={`Link ${href}`} />
      <p className={'text-sm'}>{text}</p>
    </div>
  );
};

const LinkDraggable = (props: ILink) => {
  const text = get(props, 'text', '');
  const href = get(props, 'href', '');
  const path = get(props, 'path', '');

  return (
    <Draggable path={path} className={'m-2 p-1 border-dashed border border-orange-500'}>
      <BlockLabel label={`Link ${href}`} />
      <p className={'text-sm'}>{text}</p>
    </Draggable>
  );
};

const Link = (props: ILink) => (
  <DefineDraggableComponent componentProps={props} ComponentPreview={LinkPreview} ComponentDraggable={LinkDraggable} />
);

export default Link;
