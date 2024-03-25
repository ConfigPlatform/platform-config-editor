'use client';

import {get} from 'lodash';
import ComponentMap from '@/app/component/schema/handler/componentMap';
import ElementListRenderer from '@/app/component/schema/handler/ElementListRenderer';

interface IProps {
  element: object;
  path: string;
}

const ElementRenderer = ({element, path}: IProps) => {
  const type = get(element, 'type');

  if (!type) return <ElementListRenderer path={`${path}.actions`} actions={element.actions} />;

  const HandlerComponent = ComponentMap[type];

  return <>{HandlerComponent ? <HandlerComponent {...element} path={path} /> : null}</>;
};

export default ElementRenderer;
