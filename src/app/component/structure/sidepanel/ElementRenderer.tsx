'use client';

import {get} from 'lodash';
import ElementListRenderer from '@/app/component/structure/sidepanel/ElementListRenderer';
import useConfigurationStore from '@/app/store/configurationStore';

interface IProps {
  ml: number;
  element: object;
  title?: string;
}

const ElementRenderer = ({element, ml}: IProps) => {
  const {selectElement} = useConfigurationStore.getState();

  const type = get(element, 'type', '');
  const content = get(element, 'content', []);

  return (
    <div>
      <p
        className={'hover:text-blue-700 cursor-pointer'}
        style={{marginLeft: `${ml}px`}}
        onClick={() => selectElement({element, structure: 'navbar'})}
      >
        {type}
      </p>
      <ElementListRenderer ml={ml} content={content} />
    </div>
  );
};

export default ElementRenderer;
