'use client';

import {nanoid} from 'nanoid';
import ElementListRenderer from '@/app/component/structure/page/ElementListRenderer';
import useConfigurationStore from '@/app/store/configurationStore';

export interface Page {
  path: string;
  content: any[]; // Define a specific type for content if possible
}

export interface IProps {
  entries: Page[];
}

const PageStructure = ({entries}: IProps) => {
  const {selectElement} = useConfigurationStore.getState();

  return (
    <div>
      <p
        className={'text-xs font-bold hover:text-blue-700 cursor-pointer'}
        onClick={() => selectElement({entries, scope: 'page'})}
      >
        PAGE
      </p>
      {entries.map((el) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b
            className={'hover:text-blue-700 cursor-pointer text-xs'}
            onClick={() => selectElement({entries: el, scope: 'page'})}
          >
            {el.path}
          </b>
          <ElementListRenderer ml={0} content={el.content} />
        </div>
      ))}
    </div>
  );
};

export default PageStructure;
