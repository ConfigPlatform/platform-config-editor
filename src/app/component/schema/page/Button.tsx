import React, {ReactNode} from 'react';
import {get} from 'lodash';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import Draggable from '@/app/component/wrapper/Draggable';
import DefineDraggableComponent from '@/app/component/wrapper/DefineDraggableComponent';

interface ButtonProps {
  children: ReactNode;
  path: string;
  preview: boolean;
}

const ButtonPreview: React.FC<ButtonProps> = (props: ButtonProps) => {
  const text = get(props, 'text', '');

  return (
    <div className={'m-2 border-dashed border border-lime-500 p-1 bg-gray-300'}>
      <BlockLabel label={'Button'} />
      <p className={'text-sm'}>{text}</p>
    </div>
  );
};

const ButtonDraggable: React.FC<ButtonProps> = (props: ButtonProps) => {
  const text = get(props, 'text', '');
  const path = get(props, 'path', '');

  return (
    <Draggable path={path} className={'m-2 border-dashed border border-lime-500 p-1'}>
      <BlockLabel label={'Button'} />
      <p className={'text-sm'}>{text}</p>
    </Draggable>
  );
};

const Button = (props: ButtonProps) => (
  <DefineDraggableComponent
    componentProps={props}
    ComponentPreview={ButtonPreview}
    ComponentDraggable={ButtonDraggable}
  />
);

export default Button;
