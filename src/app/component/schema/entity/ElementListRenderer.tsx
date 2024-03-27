import {nanoid} from 'nanoid';
import ElementRenderer from '@/app/component/schema/entity/ElementRenderer';

const ElementListRenderer = ({content}) => {
  const {path, ...elements} = content;
  return (
    <>
      {Object.entries(elements).map(([index, element]) => (
        <ElementRenderer key={nanoid()} element={element} path={path} />
      ))}
    </>
  );
};

export default ElementListRenderer;
