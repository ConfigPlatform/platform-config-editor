import {nanoid} from 'nanoid';
import ElementRenderer from '@/app/component/structure/sidepanel/ElementRenderer';

interface IProps {
  ml: number;
  content: object[];
  title?: string;
}

const ElementListRenderer = ({content, ml}: IProps) => {
  return (
    <>
      {content.map((el) => (
        <ElementRenderer key={nanoid()} ml={ml + 10} element={el} />
      ))}
    </>
  );
};

export default ElementListRenderer;