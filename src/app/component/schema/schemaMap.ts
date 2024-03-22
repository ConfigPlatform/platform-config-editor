import PageSchema from '@/app/component/schema/page/PageSchema';
import NavbarSchema from '@/app/component/schema/navbar/NavbarSchema';
import ModalSchema from '@/app/component/schema/modal/ModalSchema';
import SidepanelSchema from '@/app/component/schema/sidepanel/SidepanelSchema';

const schemaMap: {[name: string]: any} = {
  page: PageSchema,
  navbar: NavbarSchema,
  modal: ModalSchema,
  sidepanel: SidepanelSchema,
};

export default schemaMap;
