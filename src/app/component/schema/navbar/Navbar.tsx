import BlockLabel from '@/app/component/schema/BlockLabel';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';

interface INavbar {
  content: object[];
}

const Navbar = ({content}: INavbar) => {
  return (
    <div className={'border-dashed border border-purple-500 p-1 w-full'}>
      <BlockLabel label={'Navbar'} />
      <ElementListRenderer content={content} />
    </div>
  );
};

export default Navbar;
