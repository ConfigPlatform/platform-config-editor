import PageSchema from '@/app/component/schema/page/PageSchema';
import NavbarSchema from '@/app/component/schema/navbar/NavbarSchema';
import ModalSchema from '@/app/component/schema/modal/ModalSchema';

const schemaMap: {[name: string]: any} = {
  page: PageSchema,
  navbar: NavbarSchema,
  modal: ModalSchema,
};

export default schemaMap;
