'use client';

import useConfigurationStore from '@/app/store/configurationStore';
import {get} from 'lodash';
import PageStructure, {Page} from '@/app/component/structure/page/PageStructure';
import EntityStructure from '@/app/component/structure/entity/EntityStructure';
import NavbarStructure, {INavbar} from '@/app/component/structure/navbar/NavbarStructure';
import {IEntity} from '@/app/component/structure/entity/ElementListRenderer';
import ModalStructure, {IModal} from '@/app/component/structure/modal/ModalStructure';
import HandlerStructure, {IHandler} from '@/app/component/structure/handler/HandlerStructure';

const StructureSidebar = () => {
  const pages = useConfigurationStore((state) => get(state, 'configuration.pages', []));
  const entities = useConfigurationStore((state) => get(state, 'configuration.entities', []));
  const navbar = useConfigurationStore((state) => get(state, 'configuration.navbar', []));
  const modals = useConfigurationStore((state) => get(state, 'configuration.modals', []));
  const handlers = useConfigurationStore((state) => get(state, 'configuration.handlers', []));

  return (
    <aside className={'h-screen w-1/12 border-gray-200 bg-gray-100 pl-2 overflow-y-auto overflow-x-hidden'}>
      <PageStructure entries={pages as Page[]} />
      <EntityStructure entries={entities as IEntity[]} />
      <NavbarStructure entries={navbar as INavbar[]} />
      <ModalStructure entries={modals as IModal[]} />
      <HandlerStructure entries={handlers as IHandler[]} />
    </aside>
  );
};

export default StructureSidebar;
