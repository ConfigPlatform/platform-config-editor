'use client';

import ElementRenderer from '@/app/component/schema/handler/ElementRenderer';

interface IProps {
  element: object;
  path: string;
}

const HandlerSchema = ({element, path}: IProps) => {
  return <ElementRenderer element={element} path={path} />;
};

export default HandlerSchema;
