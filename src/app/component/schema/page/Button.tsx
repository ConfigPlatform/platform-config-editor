import React, {ReactNode} from 'react';
import {get} from 'lodash';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const text = get(props, 'text', '');

  return (
    <div className="border-dashed border border-lime-500 p-1 m-2">
      <BlockLabel label={'Button'} />
      <p className={'text-sm'}>{text}</p>
    </div>
  );
};

export default Button;
