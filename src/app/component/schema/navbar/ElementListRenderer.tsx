import {nanoid} from 'nanoid';
import NavbarElementRenderer from '@/app/component/schema/navbar/NavbarElementRenderer';

interface IProps {
  content: object[];
}

const ElementListRenderer = ({content}: IProps) => {
  return (
    <>
      {content.map((el) => (
        <NavbarElementRenderer key={nanoid()} element={el} />
      ))}
    </>
  );
};

export default ElementListRenderer;
