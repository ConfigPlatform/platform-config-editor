'use client';

import ElementListRenderer from '@/app/component/structure/modal/ElementListRenderer';

export interface IModal {
  content: IContentModal[];
  id: string;
  placement: string;
  width: string;
}

type IContentModal = {
  type: 'text' | 'container' | 'form';
  className?: string;
  value?: string;
  content?: Array<IContentModal | Form>;
};

export interface IProps {
  modal: IModal[];
}

const ModalStructure = ({modal}: IProps) => {
  return <ElementListRenderer ml={4} content={modal} />;
};

export default ModalStructure;
