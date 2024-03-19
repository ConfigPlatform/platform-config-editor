import {get} from 'lodash';
import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';

interface IText {
  value: string;
  path: string;
}

const Text = (props: IText) => {
  const value = get(props, 'value', '');
  const path = get(props, 'path', '');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-violet-500'}>
      <BlockLabel label={'Text'} />
      <p className={'text-sm'}>{value}</p>
    </ComponentSelect>
  );
};

export default Text;
