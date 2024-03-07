'use client';

import ElementListRenderer from '@/app/component/structure/navbar/ElementListRenderer';

export interface INavbar {
  className: string;
  content: IContent[];
}

export interface IContent {
  content: IContentContent[];
  path: string;
  type: string;
}
export interface IContentContent {
  className: string;
  type: string;
  value: string;
}

interface IProps {
  navbar: object;
}

const NavbarStructure = ({navbar}: IProps) => {
  return <ElementListRenderer ml={4} content={navbar} />;
};

export default NavbarStructure;