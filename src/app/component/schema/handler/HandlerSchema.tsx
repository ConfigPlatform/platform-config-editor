'use client';

import ElementRenderer from '@/app/component/schema/handler/ElementRenderer';

interface IAction {
  type: string;
  actions?: IAction[];
  title: string;
}

interface IHandler extends IAction {
  name: string;
}

interface IProps {
  element: IHandler;
  ml: number;
}

const HandlerSchema = ({element, ml}: IProps) => {
  return <ElementRenderer ml={ml} element={element} />;
};

export default HandlerSchema;
