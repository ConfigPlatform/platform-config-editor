import {get} from 'lodash';
import React from 'react';

const Text = (props: object) => {
  const value = get(props, 'value', '');

  return (
    <div style={{minWidth: '100px'}} className="m-1 p-1 border-dashed border-2 border-sky-500 rounded-md">
      <p className="font-bold d-block">Text</p>
      <p>{value}</p>
    </div>
  );
};

export default Text;
