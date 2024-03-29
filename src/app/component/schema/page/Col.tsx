import React, {ReactNode} from 'react';
import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';

interface IProps {
  children: ReactNode;
  path: string;
}

const Col: React.FC<IProps> = (props) => {
  const content = get(props, 'content', []);
  const path = get(props, 'path', '');

  const colWidth = get(props, 'width', 'w-full');
  const elementWidth: string = (+colWidth / 12) * 100 - 1.7 + '%';

  return (
    <ComponentSelect
      path={path}
      className={'m-2 border-dashed border border-indigo-500 p-1'}
      style={{width: elementWidth}}
    >
      <BlockLabel label={'Column'} />
      <ElementListRenderer content={content} path={`${path}.content`} />
    </ComponentSelect>
  );
};

export default Col;
