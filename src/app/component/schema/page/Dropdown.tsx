import {get} from 'lodash';
import ComponentSelect from '../../wrapper/ComponentSelect';
import BlockLabel from '../BlockLabel';
import ElementListRenderer from './ElementListRenderer';
import {ReactNode} from 'react';
import Draggable from '@/app/component/wrapper/Draggable';

interface IDropdown {
  children: ReactNode;
  path: string;
}

const Dropdown = (props: IDropdown) => {
  const content = get(props, 'content', []);
  const path = get(props, 'path', '');

  return (
    <Draggable path={path} className={'m-2 border-dashed border border-pink-500'}>
      <BlockLabel label={'Dropdown'} />
      <ElementListRenderer content={content} path={`${path}.content`} />
    </Draggable>
  );
};

export default Dropdown;
