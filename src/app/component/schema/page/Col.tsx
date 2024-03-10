import React, {ReactNode} from 'react';
import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface ButtonProps {
  children: ReactNode;
}

const Col: React.FC<ButtonProps> = (props: ButtonProps) => {
  const content = get(props, 'content', []);

  const colWidth = get(props, 'width', 'w-full');
  const elementWidth: string = (+colWidth / 12) * 100 - 1 + '%';
  const editorClass: string = 'border-dashed border border-indigo-500 p-1 m-2';

  return (
    <div style={{width: elementWidth}} className={editorClass}>
      <BlockLabel label={'Column'} />
      <ElementListRenderer content={content} />
    </div>
  );
};

export default Col;
