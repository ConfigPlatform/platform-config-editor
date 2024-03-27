import {CSS} from '@dnd-kit/utilities';
import {useSortable} from '@dnd-kit/sortable';
import {get} from 'lodash';
import {CSSProperties, ReactNode} from 'react';
import useDragDropStore from '@/app/store/dragDropStore';

interface IProps {
  path: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Draggable = (props: IProps) => {
  const path = get(props, 'path', '');
  const children = get(props, 'children');
  const className = get(props, 'className', '');
  const initialStyle = get(props, 'style', {});

  const hiddenElementPathList = useDragDropStore((state) => state.hiddenElementPathList);

  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: path});

  // define if we should hide element
  const shouldHideElement: boolean = hiddenElementPathList.includes(path);

  // element styles
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    ...initialStyle,
    visibility: shouldHideElement ? 'hidden' : 'visible',
  };

  return (
    <div ref={setNodeRef} style={style} className={className} {...listeners} {...attributes}>
      {children}
    </div>
  );
};

export default Draggable;
