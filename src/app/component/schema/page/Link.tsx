import {get} from 'lodash';
import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';

interface IProps {
  text: string;
  href: string;
  path: string;
}

const Link = (props: IProps) => {
  const text = get(props, 'text', '');
  const href = get(props, 'href', '');
  const path = get(props, 'path', '');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-orange-500'}>
      <BlockLabel label={`Link ${href}`} />
      <p className={'text-sm'}>{text}</p>
    </ComponentSelect>
  );
};

export default Link;
