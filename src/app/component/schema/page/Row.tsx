import React from 'react';
import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import BlockLabel from '@/app/component/schema/BlockLabel';

const Row = (props: object) => {
  const content = get(props, 'content', []);

  const elementClass: string = 'flex flex-wrap my-4';
  const editorClass: string = 'border-dashed border border-emerald-500 p-1 m-2';

  return (
    <div className={`${editorClass} ${elementClass}`}>
      <BlockLabel label={'Row'} />
      <ElementListRenderer content={content} />
    </div>
  );
};

export default Row;
