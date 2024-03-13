'use client';

import ElementRenderer from '@/app/component/schema/modal/ElementRenderer';

interface IProps {
  element: object;
  path: string;
}

const ModalSchema = ({element, path}: IProps) => {
  console.log(path, 'path');
  console.log(element, 'element');
  return <ElementRenderer element={element} path={path} />;
};

export default ModalSchema;
