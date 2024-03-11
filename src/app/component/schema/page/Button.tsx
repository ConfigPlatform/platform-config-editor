import React, {ReactNode} from 'react';
import {get} from 'lodash';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';

interface ButtonProps {
  children: ReactNode;
  path: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const text = get(props, 'text', '');
  const path = get(props, 'path', '');

  return (
    <div className={'m-2'}>
      <ComponentSelect path={path}>
        <div className={'border-dashed border border-lime-500 p-1'}>
          <BlockLabel label={'Button'} />
          <p className={'text-sm'}>{text}</p>
        </div>
      </ComponentSelect>
    </div>
  );
};

export default Button;
