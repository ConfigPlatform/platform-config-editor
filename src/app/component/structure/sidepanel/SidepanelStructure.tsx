'use client';

import ElementListRenderer from '@/app/component/structure/sidepanel/ElementListRenderer';


export interface ISidepanel {
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
  sidepanel: object;
}

const SidepanelStructure = ({sidepanel}: IProps) => {
  return <ElementListRenderer ml={4} content={sidepanel} />;
};

export default SidepanelStructure;
