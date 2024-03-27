import {CSS} from '@dnd-kit/utilities';
import {useSortable} from '@dnd-kit/sortable';
import {get} from 'lodash';
import {CSSProperties, ReactNode, useEffect} from 'react';
import useConfigurationStore from '@/app/store/configurationStore';

interface IProps {
  path: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Sortable = (props: IProps) => {
  const path = get(props, 'path', '');
  const children = get(props, 'children');
  const className = get(props, 'className', '');
  const initialStyle = get(props, 'style', {});

  const {addSelectedPath} = useConfigurationStore.getState();
  const selectedPathList = useConfigurationStore((state) => state.selectedPathList);
  const elementPath = useConfigurationStore((state) => state.elementPath);

  const {attributes, listeners, setNodeRef, transform, transition, isDragging} = useSortable({id: path});

  const isElementSelected: boolean = path === elementPath && !!path && !!elementPath;

  let defaultClassName = `${className} cursor-pointer`;

  // add bg color if element is selected
  if (isElementSelected) {
    defaultClassName += ' bg-gray-300';
  }

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    ...initialStyle,
  };

  // select element
  const selectElement = () => {
    addSelectedPath(path);

    const lastPath = selectedPathList[selectedPathList.length - 1];

    useConfigurationStore.setState({elementPath: lastPath, selectedPathList: []});
  };

  useEffect(() => {
    selectElement();
  }, [isDragging]);

  return (
    <div ref={setNodeRef} style={style} className={defaultClassName} {...listeners} {...attributes}>
      {children}
    </div>
  );
};

export default Sortable;
