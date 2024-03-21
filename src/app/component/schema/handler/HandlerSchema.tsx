'use client';

import ElementRenderer from '@/app/component/schema/handler/ElementRenderer';

interface IProps {
  name: string;
  actions: object;
}

const HandlersSchema = ({name, actions}: IProps) => {
  return <ElementRenderer name={name} element={actions} />;
};

export default HandlersSchema;
