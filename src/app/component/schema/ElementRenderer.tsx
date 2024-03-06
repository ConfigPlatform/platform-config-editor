import {get} from 'lodash';
// import ElementListRenderer from '@/app/component/schema/ElementListRenderer';
import Text from '@/app/component/schema/Text';
import Container from '@/app/component/schema/Container';
import Filter from '@/app/component/schema/Filter';
import Form from '@/app/component/schema/Form';
import Button from '@/app/component/schema/Button';

const componentMap: {[name: string]: any} = {
  text: Text,
  container: Container,
  filter: Filter,
  form: Form,
  button: Button,
};

interface IProps {
  element: object;
}

const ElementRenderer = ({element}: IProps) => {
  const type = get(element, 'type', '');
  // const content = get(element, 'content', []);
  const Component = componentMap[type];
  return (
    <>
      {Component && (
        <div style={{marginTop: '10px'}}>
          <Component {...element} />
        </div>
      )}
      {/* <ElementListRenderer content={content} /> !!: Is there a need in this component? It causes a re-render. */}
    </>
  );
};

export default ElementRenderer;
