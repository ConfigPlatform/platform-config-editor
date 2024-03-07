import {nanoid} from 'nanoid';
import ElementRenderer from '@/app/component/schema/page/ElementRenderer';

interface IProps {
  content: object[];
}

const ElementListRenderer = ({content}: IProps) => {
  return (
    <>
      {content.map((el) => (
        <ElementRenderer key={nanoid()} element={el} />
      ))}
    </>
  );
};

export default ElementListRenderer;
