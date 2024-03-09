import {get} from 'lodash';
import React from 'react';
import BlockLabel from '@/app/component/schema/page/BlockLabel';

const Link = (props: object) => {
  const text = get(props, 'text', '');
  const href = get(props, 'href', '');

  return (
    <div style={{minWidth: '100px'}} className="m-2 p-1 border-dashed border border-red-600">
      <BlockLabel label={'Link'} />
      <p>{text}</p>
      <p>{href}</p>
    </div>
  );
};

export default Link;
