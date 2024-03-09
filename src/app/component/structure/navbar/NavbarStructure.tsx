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
  entries: object;
}

const NavbarStructure = ({entries}: IProps) => {
  return (
    <div>
      <p className={'text-base font-bold'}>NAVBAR</p>
      <ElementListRenderer ml={4} content={entries} />
    </div>
  );
};

export default NavbarStructure;
