import {get} from 'lodash';
import componentMap from '@/app/component/schema/page/componentMap';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';

interface IProps {
  element: object;
}

const ElementRenderer = ({element}: IProps) => {
  let type = get(element, 'type');

  if (!type) return <ElementListRenderer content={element.content} />;

  const Component = componentMap[type];

  return <>{Component ? <Component {...element} /> : null}</>;
};

export default ElementRenderer;
