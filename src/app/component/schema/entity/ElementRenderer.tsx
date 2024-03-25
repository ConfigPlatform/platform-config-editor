import React from 'react';
import Column from './Column';
import {nanoid} from 'nanoid';

interface IEntityField {
  name: string;
  type: string;
  options: object[] | string;
}

export interface IEntity {
  entityName: string;
  fields: IEntityField[];
}

interface ElementRendererProps {
  element: IEntity;
  path: string;
}

const ElementRenderer: React.FC<ElementRendererProps> = ({element, path}) => {
  return element.fields.map((el, i) => <Column key={nanoid()} path={`${path}.fields[${i}]`} {...el} />);
};

export default ElementRenderer;
