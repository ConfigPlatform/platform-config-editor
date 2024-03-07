import {get} from 'lodash';
import React from 'react';
import BlockLabel from '@/app/component/schema/page/BlockLabel';

const Text = (props: object) => {
  const value = get(props, 'value', '');

  return (
    <div style={{minWidth: '100px'}} className="m-1 p-1 border-dashed border border-sky-500">
      <BlockLabel label={'Text'} />
      <p>{value}</p>
    </div>
  );
};

export default Text;
