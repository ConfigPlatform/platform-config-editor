'use client';

import {get} from 'lodash';
import HandlerComponentMap from './HandlerComponentMap';
import ElementListRenderer from './ElementListRenderer';

interface IProps {
  name: string;
  element: object;
}

const ElementRenderer = ({name, element}: IProps) => {
  const type = get(element, 'type');
  console.log(element, 'element');
  console.log(type, 'TYPEHANDLER');

  if (!type) return <ElementListRenderer name={`${name}.actions`} actions={element.actions} />;

  const HandlerComponent = HandlerComponentMap[type];

  return <>{HandlerComponent ? <HandlerComponent {...element} name={name} /> : null}</>;
};

export default ElementRenderer;
