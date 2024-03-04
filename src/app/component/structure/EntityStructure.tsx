'use client';

import {nanoid} from 'nanoid';
import ElementListRenderer from '@/app/component/structure/ElementListRenderer';
import useConfigurationStore from '@/app/store/configurationStore';

export interface Entity {
  entityName: string;
  fields: any[]; // Define a specific type for fields if possible
}

interface IProps {
  entities: Entity[];
}

const EntityStructure = ({entities}: IProps) => {
  const {selectElement} = useConfigurationStore.getState();

  return (
    <div>
      {entities.map((el) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b className={'hover:text-blue-700 cursor-pointer'} onClick={() => selectElement(el)}>
            {el.entityName}
          </b>
          <ElementListRenderer ml={4} content={el.fields} title="entities" />
        </div>
      ))}
    </div>
  );
};

export default EntityStructure;
