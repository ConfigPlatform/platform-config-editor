import {get, isArray, isObject} from 'lodash';
import componentMap from '@/app/component/schema/page/componentMap';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';

interface IProps {
  element: object;
}

const ElementRenderer = ({element}: IProps) => {
  let type = get(element, 'type');

  // if type isn't mentioned and content is object - element is page
  if (!type && isObject(element.content)) {
    type = 'page';
  }

  // if we haven't type now - element is pages arr
  if (!type) {
    return <ElementListRenderer content={element} />;
  }

  const Component = componentMap[type];

  return <>{Component ? <Component {...element} /> : null}</>;
};

export default ElementRenderer;
