import {nanoid} from 'nanoid';
import ElementRenderer from '@/app/component/schema/handler/ElementRenderer';

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
        <ElementRenderer key={nanoid()} ml={ml + 5} element={el} />
      ))}
    </>
  );
};

export default ElementListRenderer;
