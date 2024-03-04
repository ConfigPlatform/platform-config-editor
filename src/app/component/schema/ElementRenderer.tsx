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
  ml: number;
  element: ElementWithType | object;
}

const ElementRenderer = ({element, ml}: IProps) => {
  const type = get(element, 'type', '');
  const content = get(element, 'content', []);
  const Component = componentMap[type];

  // Check if Component exists and its type is 'button'
  const isButton = type === 'button';

  return (
    <>
      {Component && !isButton && (
        <>
          <div style={{marginLeft: `${ml}px`, marginTop: '10px'}}>
            <Component {...element} />
          </div>
          <ElementListRenderer ml={ml + 20} content={content} />
        </>
      )}

      {Component && isButton && (
        <div style={{marginLeft: `${ml}px`, marginTop: '10px'}}>
          <Component {...element}>
            <ElementListRenderer ml={ml} content={content} />
          </Component>
        </div>
      )}
    </>
  );
};

export default ElementRenderer;
