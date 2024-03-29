'use client';

import ElementRenderer from '@/app/component/schema/navbar/ElementRenderer';

interface IProps {
  element: object;
  path: string;
}

const NavbarSchema = ({element, path}: IProps) => {
  return <ElementRenderer element={element} path={path} />;
};

export default NavbarSchema;
