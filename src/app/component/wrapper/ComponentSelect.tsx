import {ReactNode, useEffect} from 'react';
import useConfigurationStore from '@/app/store/configurationStore';

interface IProps {
  children: ReactNode;
  path: string;
  className?: string;
}

const ComponentSelect = ({children, path, className}: IProps) => {
  const {addSelectedPath} = useConfigurationStore.getState();
  const elementPath = useConfigurationStore((state) => state.elementPath);
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
    <div className={defaultClassName} onClick={selectElement}>
      {children}
    </div>
  );
};

export default ComponentSelect;
