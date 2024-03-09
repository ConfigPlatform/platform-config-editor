import {nanoid} from 'nanoid';
import ElementRenderer from '@/app/component/structure/handler/ElementRenderer';

interface IAction {
  type: string;
  actions?: IAction[];
  title: string;
}

interface IProps {
  ml: number;
  actions: IAction[];
}
const ElementListRenderer = ({actions, ml}: IProps) => {
  return (
    <>
      {actions.map((el) => (
        <ElementRenderer key={nanoid()} ml={ml + 10} element={el} />
      ))}
    </>
  );
};

export default ElementListRenderer;
