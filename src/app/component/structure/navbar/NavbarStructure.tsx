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

const NavbarStructure = () => {
  const structurePath = useConfigurationStore((state) => state.structurePath);
  const isSelected = structurePath === 'navbar';

  return (
    <div>
      <p
        className={`text-xs font-bold hover:text-blue-700 cursor-pointer ${isSelected ? 'text-blue-700' : ''}`}
        onClick={() => useConfigurationStore.setState({ structurePath: 'navbar' })}
      >
        NAVBAR
      </p>
    </div>
  );
};

export default NavbarStructure;
