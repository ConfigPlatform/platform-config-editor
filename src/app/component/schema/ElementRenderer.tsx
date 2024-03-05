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
  const content = get(element, 'content', []);
  const Component = componentMap[type];

  // Check if Component exists and its type is 'button'
  const isButton = type === 'button';

  return (
    <>
      {Component && !isButton && (
        <>
          <div className="mt-2 ml-2">
            <Component {...element} />
          </div>
          <ElementListRenderer content={content} />
        </>
      )}

      {Component && isButton && (
        <div className="mt-2 ml-2">
          <Component {...element}>
            <ElementListRenderer content={content} />
          </Component>
        </div>
      )}
    </>
  );
};

export default ElementRenderer;
