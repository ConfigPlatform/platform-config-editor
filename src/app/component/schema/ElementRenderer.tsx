import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/ElementListRenderer';
import Text from './Text';
import Form from "@/app/component/schema/Form";

const componentMap: {[name: string]: any} = {
    text: Text,
    form: Form
}


interface IProps {
  element: object;
}

const ElementRenderer = ({element}: IProps) => {
  const type = get(element, 'type', '');
  const content = get(element, 'content', []);
  const Component = componentMap[type];

  return (
    <>
      {Component && (
        <div style={{marginTop: '10px'}}>
          <Component {...element} />
        </div>
      )}
      <ElementListRenderer content={content} />
    </>
  );
};

export default ElementRenderer;
