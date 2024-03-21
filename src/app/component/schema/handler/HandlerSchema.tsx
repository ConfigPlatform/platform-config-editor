'use client';

import ElementRenderer from '@/app/component/schema/handler/ElementRenderer';

interface IProps {
  element: object;
  path: string;
}

const HandlerSchema = ({element, path}: IProps) => {
  console.log(element, 'HAndlerEl');
  return <ElementRenderer element={element} path={path} />;
};

export default HandlerSchema;
