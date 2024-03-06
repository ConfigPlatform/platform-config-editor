'use client';

import {nanoid} from 'nanoid';
import useConfigurationStore from '@/app/store/configurationStore';
import {Page} from '@/app/component/structure/PageStructure';
import ElementListRenderer from '@/app/component/structure/ElementListRenderer';

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
  navbar: INavbar[];
  pages: Page[];
}

const NavbarStructure = ({navbar, pages}: IProps) => {
  const {selectElement} = useConfigurationStore.getState();

  return (
    <div>
      {pages.map((el) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b className={'hover:text-blue-700 cursor-pointer'} onClick={() => selectElement(el)}>
            {el.path}
          </b>
          <ElementListRenderer ml={4} content={el.content} title="pages" />
        </div>
      ))}
    </div>
  );
};

export default NavbarStructure;
