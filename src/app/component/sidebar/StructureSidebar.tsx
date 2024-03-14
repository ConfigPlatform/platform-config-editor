'use client';

import useConfigurationStore from '@/app/store/configurationStore';
import {get} from 'lodash';
import PageStructure, {Page} from '@/app/component/structure/page/PageStructure';
import EntityStructure from '@/app/component/structure/entity/EntityStructure';
import NavbarStructure, {INavbar} from '@/app/component/structure/navbar/NavbarStructure';
import {IEntity} from '@/app/component/structure/entity/ElementListRenderer';
import ModalStructure, {IModal} from '@/app/component/structure/modal/ModalStructure';
import HandlerStructure, {IHandler} from '@/app/component/structure/handler/HandlerStructure';
import SidepanelStructure, {ISidepanel} from '@/app/component/structure/sidepanel/SidepanelStructure';

const StructureSidebar = () => {
  const pages = useConfigurationStore((state) => get(state, 'configuration.pages', []));
  const entities = useConfigurationStore((state) => get(state, 'configuration.entities', []));
  const navbar = useConfigurationStore((state) => get(state, 'configuration.navbar', []));
  const modals = useConfigurationStore((state) => get(state, 'configuration.modals', []));
  const handlers = useConfigurationStore((state) => get(state, 'configuration.handlers', []));
  const sidepanel = useConfigurationStore((state) => get(state, 'configuration.sidepanels', []));

  return (
    <aside className={'h-screen w-1/12 border-gray-200 bg-gray-100 overflow-y-auto overflow-x-hidden p-2'}>
      <PageStructure entries={pages as Page[]} />
      <hr className={'h-px my-4 bg-gray-400 border-0'} />
      <EntityStructure entries={entities as IEntity[]} />
      <hr className={'h-px my-4 bg-gray-400 border-0'} />
      <NavbarStructure entries={navbar as INavbar[]} />
      <hr className={'h-px my-4 bg-gray-400 border-0'} />
      <ModalStructure entries={modals as IModal[]} />
      <hr className={'h-px my-4 bg-gray-400 border-0'} />
      <HandlerStructure entries={handlers as IHandler[]} />
      <hr className={'h-px my-4 bg-gray-400 border-0'} />
      <SidepanelStructure sidepanel={sidepanel as ISidepanel[]} />
    </aside>
  );
};

export default StructureSidebar;
