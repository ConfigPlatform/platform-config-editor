'use client';

import useConfigurationStore from '@/app/store/configurationStore';
import {get} from 'lodash';
import PageStructure, {Page} from '@/app/component/structure/PageStructure';
import EntityStructure, {Entity} from '@/app/component/structure/EntityStructure';
import NavbarStructure, {INavbar} from '@/app/component/structure/NavbarStructure';

const StructureSidebar = () => {
  const pages = useConfigurationStore((state) => get(state, 'configuration.pages', []));
  const entities = useConfigurationStore((state) => get(state, 'configuration.entities', []));
  const navbar = useConfigurationStore((state) => get(state, 'configuration.menu', []));

  return (
    <aside className={'h-screen w-64 border-gray-200 bg-gray-100 pl-5 overflow-scroll'}>
      <h3 className="font-bold">Pages:</h3>
      <PageStructure pages={pages as Page[]} />
      <h3 className="font-bold mt-5">Entities:</h3>
      <EntityStructure entities={entities as Entity[]} />
      <h3 className="font-bold">Navbar:</h3>
      <NavbarStructure navbar={navbar as INavbar[]} pages={pages as Page[]} />
    </aside>
  );
};

export default StructureSidebar;
