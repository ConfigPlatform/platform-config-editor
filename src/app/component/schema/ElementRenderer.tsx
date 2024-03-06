import {get} from 'lodash';
import Text from './Text';
import Button from '@/app/component/schema/Button';
import ElementListRenderer from '@/app/component/schema/ElementListRenderer';

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

  // only for page
  if (!type) {
    const content = get(element, 'content', []);
    return <ElementListRenderer content={content} />;
  }

  const Component = componentMap[type];

  return <>{Component ? <Component {...element} /> : null}</>;
};

export default ElementRenderer;
