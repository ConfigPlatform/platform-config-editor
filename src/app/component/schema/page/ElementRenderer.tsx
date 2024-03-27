import {get} from 'lodash';
import componentMap from '@/app/component/schema/page/componentMap';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import Column from '@/app/component/schema/page/table/Column';

interface IProps {
  element: object;
  path: string;
  preview: boolean;
}

const ElementRenderer = ({element, path, preview}: IProps) => {
  let type = get(element, 'type');

  // only for table column
  if (!type && element.name) {
    return <Column {...element} preview={preview} />;
  }

  if (!type) {
    return <ElementListRenderer content={element.content} path={`${path}.content`} preview={preview} />;
  }

  const Component = componentMap[type];

  return Component ? <Component {...element} path={path} preview={preview} /> : null;
};

export default ElementRenderer;
