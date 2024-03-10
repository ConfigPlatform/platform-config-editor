'use client';

import ElementListRenderer from '@/app/component/structure/handler/ElementListRenderer';
import useConfigurationStore from '@/app/store/configurationStore';
import {nanoid} from 'nanoid';

export interface IHandlerAction {
  type: string;
}

export interface IHandler {
  name: string;
  actions: IHandlerAction[];
}

interface IProps {
  entries: IHandler[];
}

const HandlerStructure = ({entries}: IProps) => {
  const {selectElement} = useConfigurationStore.getState();

  return (
    <div>
      <p className={'text-xs font-bold'}>HANDLER</p>
      {entries.map((el) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b
            className={'hover:text-blue-700 cursor-pointer text-xs'}
            onClick={() => selectElement({entries: el, scope: 'handler'})}
          >
            {el.name}
          </b>
          <ElementListRenderer ml={0} actions={el.actions} title="handlers" />
        </div>
      ))}
    </div>
  );
};

export default HandlerStructure;
