import React from 'react';
import {get} from 'lodash';
import componentMap from './componentMap';
import ElementRenderer from './ElementRenderer';
const Container = (props) => {
  const content = get(props, 'content', []);

  return (
    <div>
      <p className="font-bold d-block">Container </p>
      <div className="border-dashed border-4 border-sky-500 rounded-lg p-5 my-2.5 mx-auto overflow-auto">
        {content.map((item, index) => {
          return <ElementRenderer element={item} />;
        })}
      </div>
    </div>
  );
};

export default Container;
