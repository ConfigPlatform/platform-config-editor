import React from 'react';
import Column from './Column';

interface IEntity {
  name: string;
  type: string;
  options: object[] | string;
}
interface ElementRendererProps {
  element: IEntity;
  path: string;
}

const dynamicStructureKey = (el: IEntity): keyof IEntity | undefined => {
  const keys = Object.keys(el) as Array<keyof IEntity>;
  return keys.find((key) => Array.isArray(el[key]));
};
const ElementRenderer: React.FC<ElementRendererProps> = ({element, path}) => {
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
    return <Column key={path} path={path} {...element} />;
  }
};

export default ElementRenderer;