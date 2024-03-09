import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/navbar/ElementListRenderer';
import componentMap from '@/app/component/schema/page/componentMap';

interface IProps {
  element: object;
}

const NavbarElementRenderer = ({element}: IProps) => {
  const type = get(element, 'type', '');

  // only for page
  if (!type) {
    const content = get(element, 'content', []);
    return <ElementListRenderer content={content} />;
  }

  const Component = componentMap[type];

  return <>{Component ? <Component {...element} /> : null}</>;
};

export default NavbarElementRenderer;
