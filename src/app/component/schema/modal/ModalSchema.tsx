'use client';

import ElementRenderer from '@/app/component/schema/modal/ElementRenderer';

interface IProps {
  element: object;
  path: string;
}

const ModalSchema = ({element, path}: IProps) => {
  return <ElementRenderer element={element} path={path} />;
};

export default ModalSchema;
