'use client';

import useConfigurationStore from '@/app/store/configurationStore';
import {get} from 'lodash';
import PageStructure, {Page} from '@/app/component/structure/page/PageStructure';
import EntityStructure from '@/app/component/structure/entity/EntityStructure';
import NavbarStructure, {INavbar} from '@/app/component/structure/navbar/NavbarStructure';
import {IEntity} from '@/app/component/structure/entity/ElementListRenderer';

const StructureSidebar = () => {
  const pages = useConfigurationStore((state) => get(state, 'configuration.pages', []));
  const entities = useConfigurationStore((state) => get(state, 'configuration.entities', []));
  const navbar = useConfigurationStore((state) => get(state, 'configuration.navbar', []));

  return (
    <aside className={'h-screen w-64 border-gray-200 bg-gray-100 pl-5 overflow-scroll'}>
      <h3 className="font-bold">Pages:</h3>
      <PageStructure pages={pages as Page[]} />
      <h3 className="font-bold mt-5">Entities:</h3>
      <EntityStructure entities={entities as IEntity[]} />
      <h3 className="font-bold mt-5">Navbar:</h3>
      <NavbarStructure navbar={navbar as INavbar[]} />
    </aside>
  );
};

export default StructureSidebar;
