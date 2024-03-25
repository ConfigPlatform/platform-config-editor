import {nanoid} from 'nanoid';
import ElementRenderer from '@/app/component/schema/handler/ElementRenderer';

interface IProps {
  path: string;
  actions: object[];
}

const ElementListRenderer = ({path, actions}: IProps) => {
  return (
    <>
      {actions.map((action, i) => (
        <ElementRenderer key={nanoid()} element={action} path={`${path}[${i}]`} />
      ))}
    </>
  );
};

export default ElementListRenderer;
