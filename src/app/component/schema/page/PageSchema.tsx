import PageElementRenderer from '@/app/component/schema/page/ElementRenderer';

interface IProps {
  element: object;
  path: string;
}

const PageSchema = ({element, path}: IProps) => {
  return <PageElementRenderer element={element} path={path} />;
};

export default PageSchema;
