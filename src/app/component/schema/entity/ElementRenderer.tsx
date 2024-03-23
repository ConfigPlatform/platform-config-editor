import React from 'react';
import {get} from 'lodash';
import Type from './Type';

//Dynamic field identifier.
const dynamicStructureKey = (el) => {
  const keys = Object.keys(el);
  return keys.find((key) => Array.isArray(el[key]));
};

const ElementRenderer = ({element, path}) => {
  const componentMap = {
    string: Type,
    number: Type,
    relation: Type,
  };
  const Component = componentMap[element.type] || Type;

  // Dynamically determine the key for the nested structure.
  const nestedKey = dynamicStructureKey(element);

  if (nestedKey) {
    // Using nested key to access objects within entity.
    return (
      <div key={path}>
        {element[nestedKey].map((nestedElement, index) => (
          <ElementRenderer
            key={`${path}.${nestedKey}[${index}]`}
            element={nestedElement}
            path={`${path}.${nestedKey}[${index}]`}
          />
        ))}
      </div>
    );
  } else {
    // Render if content doesn't contain a nested structure.
    return <Component key={path} name={element.name} type={element.type} path={path} />;
  }
};

export default ElementRenderer;
