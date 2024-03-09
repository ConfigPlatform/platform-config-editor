'use client';

import NavbarElementRenderer from '@/app/component/schema/navbar/NavbarElementRenderer';

interface IProps {
  element: object;
}

const NavbarSchema = ({element}: IProps) => {
  return <NavbarElementRenderer element={element} />;
};

export default NavbarSchema;
