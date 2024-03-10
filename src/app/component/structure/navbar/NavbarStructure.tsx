'use client';

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
  entries: object;
}

const NavbarStructure = ({entries}: IProps) => {
  const {selectElement} = useConfigurationStore.getState();

  return (
    <div>
      <p
        className={'text-xs font-bold hover:text-blue-700 cursor-pointer'}
        onClick={() => selectElement({entries, scope: 'navbar'})}
      >
        NAVBAR
      </p>
    </div>
  );
};

export default NavbarStructure;
