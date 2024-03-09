'use client';

import ElementRenderer from '@/app/component/schema/navbar/ElementRenderer';

interface IProps {
  element: object;
}

const NavbarSchema = ({element}: IProps) => {
  return <ElementRenderer element={element} />;
};

export default NavbarSchema;
