'use client';

import {get} from 'lodash';
import HandlerComponentMap from '@/app/component/schema/handler/HandlerComponentMap';
import ElementListRenderer from '@/app/component/schema/handler/ElementListRenderer';

interface IProps {
  element: object;
  path: string;
}

const ElementRenderer = ({element, path}: IProps) => {
  console.log(element, 'element');
  const actions = get(element, 'actions', []);
  const types = actions.map((action) => get(action, 'type'));
  const type = types[0];
  console.log('ACTIONS', actions);
  console.log(type, 'TYPEHANDLER');

  if (!type) return <ElementListRenderer path={`${path}.actions`} actions={actions} />;

  const HandlerComponent = HandlerComponentMap[type];

  return <>{HandlerComponent ? <HandlerComponent {...element} name={path} /> : null}</>;
};

export default ElementRenderer;
