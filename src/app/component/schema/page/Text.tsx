import {get} from 'lodash';
import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';

const Text = (props: object) => {
  const value = get(props, 'value', '');

  return (
    <div className="m-2 p-1 border-dashed border border-violet-500">
      <BlockLabel label={'Text'} />
      <p className={'text-sm'}>{value}</p>
    </div>
  );
};

export default Text;
