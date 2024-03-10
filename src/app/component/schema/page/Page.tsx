import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IPage {
  path: string;
  content: object[];
}

const Page = ({path, content}: IPage) => {
  return (
    <div className={'border-dashed border border-purple-500 p-1 my-4 w-full'}>
      <BlockLabel label={path} />
      <ElementListRenderer content={content} />
    </div>
  );
};

export default Page;
