import {nanoid} from 'nanoid';
import ElementRenderer from './ElementRenderer';

interface IProps {
  name: string;
  actions: object[];
}

const ElementListRenderer = ({name, actions}: IProps) => {
  return (
    <>
      {Object.entries(actions).map((action, i) => (
        <ElementRenderer key={nanoid()} element={action} name={`${name}[${i}]`} />
      ))}
    </>
  );
};

export default ElementListRenderer;
