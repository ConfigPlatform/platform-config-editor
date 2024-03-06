import React, {ReactNode} from 'react';
import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import BlockLabel from '@/app/component/schema/page/BlockLabel';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const content = get(props, 'content', []);

  return (
    <div className="border-dashed border border-sky-500 p-1 m-1">
      <BlockLabel label={'Button'} />
      <ElementListRenderer content={content} />
    </div>
  );
};

export default Button;
