import PageElementRenderer from '@/app/component/schema/page/ElementRenderer';

interface IProps {
  element: object;
}

const PageSchema = ({element}: IProps) => {
  return <PageElementRenderer element={element} />;
};

export default PageSchema;
