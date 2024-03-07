'use client';

import useConfigurationStore from '@/app/store/configurationStore';
import {get} from 'lodash';
import PageStructure, {Page} from '@/app/component/structure/page/PageStructure';
import EntityStructure from '@/app/component/structure/entity/EntityStructure';
import {IEntity} from '@/app/component/structure/entity/ElementListRenderer';
import ModalStructure, {IModal} from '@/app/component/structure/page/ModalStrucure';

const StructureSidebar = () => {
  const pages = useConfigurationStore((state) => get(state, 'configuration.pages', []));
  const entities = useConfigurationStore((state) => get(state, 'configuration.entities', []));
  const modals = useConfigurationStore((state) => get(state, 'configuration.modals', []));

  return (
    <aside className={'h-screen w-64 border-gray-200 bg-gray-100 pl-5 overflow-scroll'}>
      <h3 className="font-bold">Pages:</h3>
      <PageStructure pages={pages as Page[]} />
      <h3 className="font-bold mt-5">Entities:</h3>
      <EntityStructure entities={entities as IEntity[]} />
      <h3 className="font-bold mt-5">Modals:</h3>
      <ModalStructure modals={modals as IModal[]} />
    </aside>
  );
};

export default StructureSidebar;
