'use client';

import ElementRenderer from '@/app/component/schema/entity/ElementRenderer';

interface IProps {
  element: IEntity;
  path: string;
}

const EntitySchema = ({element, path}: IProps) => {
  return <ElementRenderer element={element} path={path} />;
};

export default EntitySchema;
