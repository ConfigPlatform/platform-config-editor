import {ReactNode, useEffect} from 'react';
import useConfigurationStore from '@/app/store/configurationStore';

interface IProps {
  children: ReactNode;
  path: string;
}

const ComponentSelect = ({children, path}: IProps) => {
  const {addSelectedPath} = useConfigurationStore.getState();
  const elementPath = useConfigurationStore((state) => state.elementPath);
  const selectedPathList = useConfigurationStore((state) => state.selectedPathList);

  const isElementSelected: boolean = path === elementPath && !!path && !!elementPath;

  let className = 'cursor-pointer';

  // add bg color if element is selected
  if (isElementSelected) {
    className += ' bg-gray-300';
  }

  // select element
  const selectElement = () => {
    addSelectedPath(path);

    const lastPath = selectedPathList[selectedPathList.length - 1];

    useConfigurationStore.setState({elementPath: lastPath, selectedPathList: []});
  };

  return (
    <div className={className} onClick={selectElement}>
      {children}
    </div>
  );
};

export default ComponentSelect;
