import {get} from 'lodash';
import componentMap from '@/app/component/schema/page/componentMap';
import ElementListRenderer from '@/app/component/schema/footer/ElementListRenderer';

interface IProps {
  element: object;
  path: string;
}

const ElementRenderer = ({element, path}: IProps) => {
  const type = get(element, 'type', '');
  const content = get(element, 'footer.content', []);

  if (!type) {
    return <ElementListRenderer content={content} path={`${path}.content`} />;
  }

  const Component = componentMap[type];
  return <>{Component ? <Component {...element} path={path} /> : null}</>;
};

export default ElementRenderer;
