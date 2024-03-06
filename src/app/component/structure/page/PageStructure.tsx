'use client';

import {nanoid} from 'nanoid';
import ElementListRenderer from '@/app/component/structure/page/ElementListRenderer';
import useConfigurationStore from '@/app/store/configurationStore';

export interface Page {
  path: string;
  content: any[]; // Define a specific type for content if possible
}

export interface IProps {
  pages: Page[];
}

const PageStructure = ({pages}: IProps) => {
  const {selectElement} = useConfigurationStore.getState();

  return (
    <div>
      {pages.map((el) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b
            className={'hover:text-blue-700 cursor-pointer'}
            onClick={() => selectElement({element: el, structure: 'page'})}
          >
            {el.path}
          </b>
          <ElementListRenderer ml={4} content={el.content} title="pages" />
        </div>
      ))}
    </div>
  );
};

export default PageStructure;
