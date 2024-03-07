import React from 'react';
import {get} from 'lodash';

interface ButtonProps {
  label: string;
}

const BlockLabel: React.FC<ButtonProps> = (props: ButtonProps) => {
  const label = get(props, 'label', 'No label');

  return (
    <div className="text-xs w-full -mt-3">
       <span className="bg-white">
        {label}
       </span>
    </div>
  );
};

export default BlockLabel;
