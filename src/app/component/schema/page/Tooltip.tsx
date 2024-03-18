import {get} from 'lodash';
import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';

interface ITooltip {
  value: string;
  path: string;
  content: object[];
}

const Tooltip = (props: ITooltip) => {
  const value = get(props, 'value', '');
  const path = get(props, 'path', '');
  const content = get(props, 'content', []);

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-amber-500'}>
      <BlockLabel label={'Tooltip'} />
      <p className={'text-sm'}>{value}</p>
      <ElementListRenderer content={content} path={`${path}.content`} />
    </ComponentSelect>
  );
};

export default Tooltip;
