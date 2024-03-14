import {nanoid} from 'nanoid';
import ElementRenderer from '@/app/component/schema/modal/ElementRenderer';

interface IProps {
  content: object[];
  path: string;
}

const ElementListRenderer = ({content, path}: IProps) => {
  return (
    <>
      {content.map((el, i) => (
        <ElementRenderer key={nanoid()} element={el} path={`${path}[${i}]`} />
      ))}
    </>
  );
};

export default ElementListRenderer;
