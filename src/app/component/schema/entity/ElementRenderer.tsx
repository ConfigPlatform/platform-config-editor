import {get} from 'lodash';

import Type from './Type';

interface IProps {
  element: object;
  path: string;
}

const ElementRenderer = ({element, path}) => {
  const componentMap = {
    string: Type,
    number: Type,
    relation: Type,
  };
  //!Note: Options are shown as [object Object] since there is no nested object handler for the assistant.
  const Component = componentMap[element.type] || Type;
  //Deconstructing fields.
  if (element.fields && Array.isArray(element.fields)) {
    return (
      <div key={path}>
        {element.fields.map((field, index) => (
          <ElementRenderer key={`${path}.fields[${index}]`} element={field} path={`${path}.fields[${index}]`} /> //!NOTE: Not 100% dynamic.
        ))}
      </div>
    );
  } else {
    // Ecah element gets each Type[component] render.
    return <Component key={path} name={element.name} type={element.type} path={path} />;
  }
};

export default ElementRenderer;
