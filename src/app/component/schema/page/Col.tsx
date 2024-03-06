import React, {ReactNode} from 'react';
import {get} from 'lodash';
import ElementListRenderer
  from '@/app/component/schema/page/ElementListRenderer';
import BlockLabel from '@/app/component/schema/page/BlockLabel';

interface ButtonProps {
  children: ReactNode;
}

const Col: React.FC<ButtonProps> = (props: ButtonProps) => {
  const content = get(props, 'content', []);

  const colWidth = get(props, 'width', 'w-full');
  const elementClass:string = `w-${colWidth}/12`;
  const editorClass:string = 'border-dashed border border-indigo-500 p-1 m-1';

  return (
    <div className={editorClass + ' ' + elementClass}>
      <BlockLabel label={'Column'} />
      <ElementListRenderer content={content} />
    </div>
  );
};

export default Col;
