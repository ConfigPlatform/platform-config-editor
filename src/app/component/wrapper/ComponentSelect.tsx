import {CSSProperties, ReactNode, useEffect} from 'react';
import useConfigurationStore from '@/app/store/configurationStore';

interface IProps {
  children: ReactNode;
  path: string;
  className?: string;
  style?: CSSProperties;
}

const ComponentSelect = ({children, path, className, style}: IProps) => {
  const {addSelectedPath} = useConfigurationStore.getState();
  const elementPath = useConfigurationStore((state) => state.elementPath);
  const selectedPathList = useConfigurationStore((state) => state.selectedPathList);

  const isElementSelected: boolean = path === elementPath && !!path && !!elementPath;
  const {setAssistantInput} = useConfigurationStore.getState();
  let defaultClassName = `${className} cursor-pointer`;

  // add bg color if element is selected
  if (isElementSelected) {
    defaultClassName += ' bg-gray-300';
  }

  // select element
  const selectElement = () => {
    addSelectedPath(path);

    const lastPath = selectedPathList[selectedPathList.length - 1];
    setAssistantInput('');
    useConfigurationStore.setState({elementPath: lastPath, selectedPathList: []});
  };

  return (
    <div style={style} className={defaultClassName} onClick={selectElement}>
      {children}
    </div>
  );
};

export default ComponentSelect;
