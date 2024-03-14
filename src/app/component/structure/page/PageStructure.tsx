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
  console.log(entries, 'page entries');
  return (
    <div>
      <p className={'text-xs font-bold'}>PAGE</p>

      {entries.map((el, i) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b
            className={'hover:text-blue-700 cursor-pointer text-xs'}
            onClick={() => useConfigurationStore.setState({structurePath: `pages[${i}]`})}
          >
            {el.path}
          </b>
        </div>
      ))}
    </div>
  );
};

export default PageStructure;
