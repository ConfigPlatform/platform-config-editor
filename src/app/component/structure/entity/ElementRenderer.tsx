'use client';

import {get} from 'lodash';
import {IEntity} from './ElementListRenderer';
import useConfigurationStore from '@/app/store/configurationStore';

interface IProps {
  ml: number;
  entity: IEntity;
}

const ElementRenderer = ({entity, ml}: IProps) => {
  const {selectElement} = useConfigurationStore.getState();

  const name = get(entity, 'entityName', '');

  return (
    <div>
      <p
        className={'hover:text-blue-700 cursor-pointer font-bold'}
        style={{marginLeft: `${ml}px`}}
        onClick={() => selectElement({entries: entity, scope: 'entity'})}
      >
        {name}
      </p>
    </div>
  );
};

export default ElementRenderer;
