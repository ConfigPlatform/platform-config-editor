'use client';
import ElementRenderer from '@/app/component/schema/footer/ElementRenderer';

interface IProps {
  element: object;
  path: string;
}

const FooterSchema = ({element, path}: IProps) => {
  return <ElementRenderer element={element} path={path} />;
};

export default FooterSchema;
