'use client';

import {nanoid} from 'nanoid';
import useConfigurationStore from '@/app/store/configurationStore';

export interface IEntity {
  path: string;
  fields: any[]; // Define a specific type for content if possible
}

export interface IProps {
  entries: IEntity[];
}

const EntityStructure = ({entries}: IProps) => {
  return (
    <div>
      <p className={'text-xs font-bold'}>ENTITY</p>

      {entries.map((el, i) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b
            className={'hover:text-blue-700 cursor-pointer text-xs'}
            onClick={() => useConfigurationStore.setState({structurePath: `entities[${i}]`})}
          >
            {el.entityName}
          </b>
        </div>
      ))}
    </div>
  );
};

export default EntityStructure;
