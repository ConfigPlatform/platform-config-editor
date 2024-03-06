import React, {ReactNode} from 'react';
import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/ElementListRenderer';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const content = get(props, 'content', []);

  return (
    <div className="border-dashed border-2 border-sky-500 rounded-md p-1">
      <p className="font-bold">Button</p>
      <ElementListRenderer content={content} />
    </div>
  );
};

export default Button;
