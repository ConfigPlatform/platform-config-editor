import {get} from 'lodash';
import componentMap from '@/app/component/schema/page/componentMap';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';

interface IProps {
  element: object;
  path: string;
}

const ElementRenderer = ({element, path}: IProps) => {
  let type = get(element, 'type');

  if (!type) return <ElementListRenderer content={element.content} path={`${path}.content`} />;

  const Component = componentMap[type];

  return <>{Component ? <Component {...element} path={path} /> : null}</>;
};

export default ElementRenderer;
