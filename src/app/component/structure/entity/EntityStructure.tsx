'use client';

import ElementListRenderer, {IEntity} from './ElementListRenderer';

interface IProps {
  entries: IEntity[];
}

const EntityStructure = ({entries}: IProps) => {
  return (
    <div>
      <p className={'text-xs font-bold'}>ENTITY</p>
      <ElementListRenderer ml={0} entities={entries} />
    </div>
  );
};

export default EntityStructure;
