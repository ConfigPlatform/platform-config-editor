import PageElementRenderer from '@/app/component/schema/page/ElementRenderer';

interface IProps {
  element: object;
  path: string;
  preview: boolean;
}

const PageSchema = (props: IProps) => {
  return <PageElementRenderer {...props} />;
};

export default PageSchema;
