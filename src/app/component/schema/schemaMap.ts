import PageSchema from '@/app/component/schema/page/PageSchema';
import NavbarSchema from '@/app/component/schema/navbar/NavbarSchema';

const schemaMap: {[name: string]: any} = {
  page: PageSchema,
  navbar: NavbarSchema,
};

export default schemaMap;
