import {nanoid} from 'nanoid';
import ElementRenderer from '@/app/component/structure/page/ElementRenderer';

interface IProps {
  ml: number;
  content: object[];
}

const ElementListRenderer = ({content, ml}: IProps) => {
  return (
    <>
      {content.map((el) => (
        <ElementRenderer key={nanoid()} ml={ml + 5} element={el} />
      ))}
    </>
  );
};

export default ElementListRenderer;
