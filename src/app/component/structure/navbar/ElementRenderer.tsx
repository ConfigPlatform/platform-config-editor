'use client';

import {get} from 'lodash';
import ElementListRenderer from '@/app/component/structure/navbar/ElementListRenderer';
import useConfigurationStore from '@/app/store/configurationStore';

interface IProps {
  ml: number;
  element: object;
  title?: string;
}

const ElementRenderer = ({element, ml}: IProps) => {
  const type = get(element, 'type', '');
  const content = get(element, 'content', []);

  return (
    <div>
      <p className={'hover:text-blue-700 cursor-pointer text-xs'} style={{marginLeft: `${ml}px`}}>
        {type}
      </p>
      <ElementListRenderer ml={ml} content={content} />
    </div>
  );
};

export default ElementRenderer;
