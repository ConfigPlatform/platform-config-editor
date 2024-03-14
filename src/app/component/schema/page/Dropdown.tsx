import {get} from 'lodash';
import ComponentSelect from '../../wrapper/ComponentSelect';
import BlockLabel from '../BlockLabel';
import ElementListRenderer from './ElementListRenderer';
import {ReactNode} from 'react';

interface IDropdown {
  children: ReactNode;
  path: string;
}

const Dropdown = (props: IDropdown) => {
  const content = get(props, 'content', []);
  const path = get(props, 'path', '');

  return (
    <div className={'m-2'}>
      <ComponentSelect path={path}>
        <div className="border-dashed border border-pink-500">
          <BlockLabel label={'Dropdown'} />
          <ElementListRenderer content={content} path={`${path}.content`} />
        </div>
      </ComponentSelect>
    </div>
  );
};

export default Dropdown;
