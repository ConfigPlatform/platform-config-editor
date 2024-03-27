import {nanoid} from 'nanoid';
import ElementRenderer from '@/app/component/schema/page/ElementRenderer';
import DraggableList from '@/app/component/wrapper/DraggableList';

interface IProps {
  content: object[];
  path: string;
  preview: boolean;
}

const ElementListRenderer = ({content, path, preview}: IProps) => {
  const paths = content.map((_, i) => `${path}[${i}]`);

  return (
    <DraggableList id={path} items={paths} strategy={'vertical'}>
      {content.map((el, i) => (
        <ElementRenderer key={nanoid()} element={el} path={paths[i]} preview={preview} />
      ))}
    </DraggableList>
  );
};

export default ElementListRenderer;
