'use client';

import ElementListRenderer, {IEntity} from './ElementListRenderer';

interface IProps {
  entities: IEntity[];
}

const EntityStructure = ({entities}: IProps) => {
  return <ElementListRenderer ml={4} entities={entities} />;
};

export default EntityStructure;
