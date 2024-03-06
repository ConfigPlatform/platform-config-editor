import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/ElementListRenderer';
import Text from './Text';
import Button from '@/app/component/schema/Button';

const componentMap: {[name: string]: any} = {
  text: Text,
  button: Button,
};

interface ElementWithType {
  type: string;
  content: object[];
}

interface IProps {
  element: ElementWithType | object;
}

const ElementRenderer = ({element}: IProps) => {
  const type = get(element, 'type', '');
  const Component = componentMap[type];

  return <>{Component ? <Component {...element} /> : null}</>;
};

export default ElementRenderer;
