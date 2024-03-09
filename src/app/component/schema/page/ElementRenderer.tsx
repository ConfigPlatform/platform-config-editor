import {get} from 'lodash';
import componentMap from '@/app/component/schema/page/componentMap';

interface IProps {
  element: object;
}

const ElementRenderer = ({element}: IProps) => {
  const type = get(element, 'type', 'page');

  const Component = componentMap[type];

  return <>{Component ? <Component {...element} /> : null}</>;
};

export default ElementRenderer;
