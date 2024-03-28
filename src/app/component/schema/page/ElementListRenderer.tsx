import {nanoid} from 'nanoid';
import ElementRenderer from '@/app/component/schema/page/ElementRenderer';
import DraggableList from '@/app/component/wrapper/DraggableList';

interface IProps {
  content: object[];
  path: string;
  preview: boolean;
  strategy: 'vertical' | 'horizontal';
}

const ElementListRenderer = ({content, path, preview, strategy}: IProps) => {
  const paths = content.map((_, i) => `${path}[${i}]`);

  return (
    <DraggableList id={path} items={paths} strategy={strategy}>
      {content.map((el, i) => (
        <ElementRenderer key={nanoid()} element={el} path={paths[i]} preview={preview} />
      ))}
    </DraggableList>
  );
};

export default ElementListRenderer;
