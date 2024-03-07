import React from 'react';
import {get} from 'lodash';
import ElementRenderer from './ElementRenderer';
import BlockLabel from '@/app/component/schema/page/BlockLabel';
import {nanoid} from 'nanoid';

const Container = (props) => {
  const content = get(props, 'content', []);

  return (
    <div>
      <BlockLabel label={'Container'} />
      <div className="border-dashed border border-emerald-500 p-1 m-1">
        {content.map((item) => {
          return <ElementRenderer key={nanoid()} element={item} />;
        })}
      </div>
    </div>
  );
};

export default Container;
