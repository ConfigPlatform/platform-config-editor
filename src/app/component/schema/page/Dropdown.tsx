import {get} from 'lodash';
import ComponentSelect from '../../wrapper/ComponentSelect';
import BlockLabel from '../BlockLabel';
import ElementListRenderer from './ElementListRenderer';
import React, {ReactNode} from 'react';
import Draggable from '@/app/component/wrapper/Draggable';
import DefineDraggableComponent from '@/app/component/wrapper/DefineDraggableComponent';

interface IDropdown {
  children: ReactNode;
  path: string;
  preview: boolean;
}

const DropdownPreview = (props: IDropdown) => {
  const content = get(props, 'content', []);
  const path = get(props, 'path', '');

  return (
    <div className={'m-2 border-dashed border border-pink-500 bg-gray-300'}>
      <BlockLabel label={'Dropdown'} />
      <ElementListRenderer content={content} path={`${path}.content`} preview={true} />
    </div>
  );
};

const DropdownDraggable = (props: IDropdown) => {
  const content = get(props, 'content', []);
  const path = get(props, 'path', '');

  return (
    <Draggable path={path} className={'m-2 border-dashed border border-pink-500'}>
      <BlockLabel label={'Dropdown'} />
      <ElementListRenderer content={content} path={`${path}.content`} preview={false} />
    </Draggable>
  );
};

const Dropdown = (props: IDropdown) => (
  <DefineDraggableComponent
    componentProps={props}
    ComponentPreview={DropdownPreview}
    ComponentDraggable={DropdownDraggable}
  />
);

export default Dropdown;
