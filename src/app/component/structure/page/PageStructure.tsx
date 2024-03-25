'use client';

import {nanoid} from 'nanoid';
import useConfigurationStore from '@/app/store/configurationStore';

export interface Page {
  path: string;
  content: any[]; // Define a specific type for content if possible
}

export interface IProps {
  entries: Page[];
}

const PageStructure = ({entries}: IProps) => {
  const structurePath = useConfigurationStore((state) => state.structurePath);
  const {setAssistantInput} = useConfigurationStore.getState();

  const handleClick = (i: number) => {
    setAssistantInput('');
    useConfigurationStore.setState({structurePath: `pages[${i}]`});
  };

  return (
    <div>
      <p className={'text-xs font-bold'}>PAGE</p>
      {entries.map((el, i) => {
        const isSelected = structurePath === `pages[${i}]`;

        return (
          <div key={nanoid()} style={{marginLeft: '4px'}}>
            <b
              className={`hover:text-blue-700 cursor-pointer text-xs ${isSelected ? 'text-blue-700' : ''}`}
              onClick={() => handleClick(i)}
            >
              {el.path}
            </b>
          </div>
        );
      })}
    </div>
  );
};

export default PageStructure;
