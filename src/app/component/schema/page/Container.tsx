import React, {ReactNode} from 'react';
import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';

interface IProps {
  children: ReactNode;
  path: string;
}

const Container: React.FC<IProps> = (props) => {
  const content = get(props, 'content', []);
  const path = get(props, 'path', '');

  const colWidth = get(props, 'width', 'w-full');
  const elementWidth: string = (+colWidth / 12) * 100 - 1 + '%';

  return (
    <div className={'m-2'} style={{width: elementWidth}}>
      <ComponentSelect path={path}>
        <div className={'border-dashed border border-fuchsia-500 p-1'}>
          <BlockLabel label={'Container'} />
          <ElementListRenderer content={content} path={`${path}.content`} />
        </div>
      </ComponentSelect>
    </div>
  );
};

export default Container;
