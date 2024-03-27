import {get} from 'lodash';
import componentMap from '@/app/component/schema/page/componentMap';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import Droppable from '@/app/component/wrapper/Droppable';
import SortableList from '../../wrapper/SortableList';

interface IProps {
  element: object;
  path: string;
}

const ElementRenderer = ({element, path}: IProps) => {
  let type = get(element, 'type');

  if (!type) {
    const itemPaths = element.content.map((el, i) => `${path}.content[${i}]`);

    return (
      <SortableList items={itemPaths} strategy={'vertical'}>
        <ElementListRenderer content={element.content} path={`${path}.content`} />
      </SortableList>
    );
  }

  const Component = componentMap[type];

  return Component ? <Component {...element} path={path} /> : null;
};

export default ElementRenderer;
