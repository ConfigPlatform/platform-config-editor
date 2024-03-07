import React, {ReactNode} from 'react';
import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import BlockLabel from '@/app/component/schema/page/BlockLabel';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const text = get(props, 'text', '');

  return (
    <div className="border-dashed border border-sky-500 p-1 m-1">
      <BlockLabel label={'Button'} />
      <p>{text}</p>
    </div>
  );
};

export default Button;
