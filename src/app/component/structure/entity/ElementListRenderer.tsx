import ElementRenderer from './ElementRenderer';

export interface IEntity {
  name: string;
  // TODO describe whole object
}

interface IProps {
  ml: number;
  entities: IEntity[];
}

const ElementListRenderer = ({ml, entities}: IProps) => {
  return (
    <>
      {entities.map((el, i) => (
        <ElementRenderer key={i} ml={ml + 5} entity={el} />
      ))}
    </>
  );
};

export default ElementListRenderer;
