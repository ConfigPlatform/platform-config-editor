import {get} from 'lodash';
import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';

const Link = (props: object) => {
  const text = get(props, 'text', '');
  const href = get(props, 'href', '');

  return (
    <div className="m-2 p-1 border-dashed border border-orange-500">
      <BlockLabel label={`Link ${href}`} />
      <p className={'text-sm'}>{text}</p>
    </div>
  );
};

export default Link;
