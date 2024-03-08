'use client';

import ElementListRenderer from '@/app/component/structure/modal/ElementListRenderer';

export interface IModal {
  className: string;
  content: IContent[];
}

export interface IContent {
  content: IContentContent[];
  path: string;
  type: string;
}
export interface IContentContent {
  className: string;
  type: string;
  value: string;
}

interface IProps {
  modal: object;
}

const ModalStructure = ({modal}: IProps) => {
  return <ElementListRenderer ml={4} content={modal} />;
};

export default ModalStructure;
