import {ReactNode} from 'react';
import {useDroppable} from '@dnd-kit/core';

interface IProps {
  path: string;
  children: ReactNode;
}

const Droppable = ({children, path}: IProps) => {
  const {setNodeRef} = useDroppable({
    id: path,
    data: {path},
  });

  return <div ref={setNodeRef}>{children}</div>;
};

export default Droppable;
