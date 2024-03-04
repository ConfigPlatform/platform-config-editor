'use client';

import {get} from 'lodash';
import ElementListRenderer from '@/app/component/structure/ElementListRenderer';
import useConfigurationStore from '@/app/store/configurationStore';

interface IProps {
  ml: number;
  element: object;
  title?: string;
}

const ElementRenderer = ({element, ml, title}: IProps) => {
  const {selectElement} = useConfigurationStore.getState();

  const type = get(element, 'type', '');
  const name = get(element, 'name', '');
  const content = get(element, 'content', []);
  const renderEl = title && title === 'entities' ? name : type;

  return (
    <div>
      <p
        className={'hover:text-blue-700 cursor-pointer'}
        style={{marginLeft: `${ml}px`}}
        onClick={() => selectElement(element)}
      >
        {renderEl}
      </p>
      <ElementListRenderer ml={ml} content={content} />
    </div>
  );
};

export default ElementRenderer;
