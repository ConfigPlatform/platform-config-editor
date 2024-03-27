import {CSSProperties, ReactNode} from 'react';
import useConfigurationStore from '@/app/store/configurationStore';
import {get} from 'lodash';

interface IProps {
  children: ReactNode;
  path: string;
  className?: string;
  style?: CSSProperties;
}

const ComponentSelect = (props: IProps) => {
  const children = get(props, 'children');
  const className = get(props, 'className', '');
  const style = get(props, 'style');
  const path = get(props, 'path', '');

  const {addSelectedPath} = useConfigurationStore.getState();
  const elementPath = useConfigurationStore((state) => state.selectedElementPath);
  const selectedPathList = useConfigurationStore((state) => state.selectedPathList);

  const isElementSelected: boolean = path === elementPath && !!path && !!elementPath;

  let defaultClassName = `${className} cursor-pointer`;

  // add bg color if element is selected
  if (isElementSelected) {
    defaultClassName += ' bg-gray-300';
  }

  // select element
  const selectElement = () => {
    addSelectedPath(path);

    const lastPath = selectedPathList[selectedPathList.length - 1];

    useConfigurationStore.setState({elementPath: lastPath, selectedPathList: []});
  };

  return (
    <div style={style} className={defaultClassName} onClick={selectElement}>
      {children}
    </div>
  );
};

export default ComponentSelect;
