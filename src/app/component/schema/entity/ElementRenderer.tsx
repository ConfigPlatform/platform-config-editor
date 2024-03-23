import React from 'react';
import {get} from 'lodash';
import Type from './Type';

interface IEntity {
  name: string;
  type: string;
  options: object[] | string;
}
interface ElementRendererProps {
  element: IEntity;
  path: string;
}
//Dynamic field identifier.

const dynamicStructureKey = (el: IEntity): keyof IEntity | undefined => {
  const keys = Object.keys(el) as Array<keyof IEntity>;
  return keys.find((key) => Array.isArray(el[key]));
};
const ElementRenderer: React.FC<ElementRendererProps> = ({element, path}) => {
  const componentMap: any = {
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
        {(element as any)[nestedKey].map((nestedElement: IEntity, index: number) => (
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
