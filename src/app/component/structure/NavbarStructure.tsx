'use client';

import {nanoid} from 'nanoid';
import useConfigurationStore from '@/app/store/configurationStore';

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
}

const NavbarStructure = ({navbar}: IProps) => {
  console.log(navbar, 'navbar');
  const {selectElement} = useConfigurationStore.getState();

  return (
    <div>
      {navbar.content?.map((el: IContent) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b className={'hover:text-blue-700 cursor-pointer'} onClick={() => selectElement(el)}>
            {el.content[0].value}
          </b>
        </div>
      ))}
    </div>
  );
};

export default NavbarStructure;
