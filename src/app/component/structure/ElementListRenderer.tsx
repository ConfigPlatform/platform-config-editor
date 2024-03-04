import {nanoid} from 'nanoid';
import ElementRenderer from '@/app/component/structure/ElementRenderer';

interface IProps {
  ml: number;
  content: object[];
  title?: string;
}

const ElementListRenderer = ({content, ml, title}: IProps) => {
  return (
    <>
      {content.map((el) => (
        <ElementRenderer key={nanoid()} ml={ml + 10} element={el} title={title} />
      ))}
    </>
  );
};

export default ElementListRenderer;
