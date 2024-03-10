import {get} from 'lodash';
import componentMap from '@/app/component/schema/page/componentMap';
import Navbar from '@/app/component/schema/navbar/Navbar';

interface IProps {
  element: object;
}

const ElementRenderer = ({element}: IProps) => {
  const type = get(element, 'type', '');

  if (!type) {
    return <Navbar content={element} />;
  }

  const Component = componentMap[type];

  return <>{Component ? <Component {...element} /> : null}</>;
};

export default ElementRenderer;
