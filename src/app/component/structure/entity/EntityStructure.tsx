import { nanoid } from 'nanoid';
import useConfigurationStore from '@/app/store/configurationStore';
import { useEffect } from 'react';

export interface IEntity {
  path: string;
  fields: any[]; // Define a specific type for content if possible
  entityName: string;
}

export interface IProps {
  entries: IEntity[];
}

const EntityStructure = ({ entries }: IProps) => {
  const selectedEntity = useConfigurationStore((state) => state.selectedEntity);
  const structurePath = useConfigurationStore((state) => state.structurePath);

  useEffect(() => {
    const selected = entries.findIndex((el, i) => `entities[${i}]` === structurePath);
    useConfigurationStore.setState({ selectedEntity: selected });
  }, [structurePath, entries]);

  return (
    <div>
      <p className={'text-xs font-bold'}>ENTITY</p>

      {entries.map((el, i) => (
        <div key={nanoid()} style={{ marginLeft: '4px' }}>
          <b
            className={`hover:text-blue-700 cursor-pointer text-xs ${selectedEntity === i ? 'text-blue-700' : ''}`}
            onClick={() => useConfigurationStore.setState({ structurePath: `entities[${i}]`, selectedEntity: i })}
          >
            {el.entityName}
          </b>
        </div>
      ))}
    </div>
  );
};

export default EntityStructure;
