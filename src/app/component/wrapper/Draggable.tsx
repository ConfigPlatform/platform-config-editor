import {CSSProperties, ReactNode, useEffect} from 'react';
import {get} from 'lodash';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import useConfigurationStore from '@/app/store/configurationStore';

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
  const style = get(props, 'style', {});

  const {addSelectedPath} = useConfigurationStore.getState();
  const selectedPathList = useConfigurationStore((state) => state.selectedPathList);

  const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
    id: path,
    data: {path},
  });

  // select element
  const selectElement = () => {
    addSelectedPath(path);

    const lastPath = selectedPathList[selectedPathList.length - 1];

    useConfigurationStore.setState({elementPath: lastPath, selectedPathList: []});
  };

  useEffect(() => {
    isDragging && selectElement();
  }, [isDragging]);

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{...style, transform: CSS.Translate.toString(transform)}}
      className={`${className} ${isDragging ? 'border-2' : ''}`}
    >
      {children}
    </div>
  );
};

export default Draggable;
