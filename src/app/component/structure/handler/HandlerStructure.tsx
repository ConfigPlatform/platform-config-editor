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
  handlers: IHandler[];
}

const HandlerStructure = ({handlers}: IProps) => {
  const {selectElement} = useConfigurationStore.getState();

  return (
    <div>
      {handlers.map((el) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b
            className={'hover:text-blue-700 cursor-pointer'}
            onClick={() => selectElement({element: el, structure: 'handler'})}
          >
            {el.name}
          </b>
          <ElementListRenderer ml={4} actions={el.actions} title="handlers" />
        </div>
      ))}
    </div>
  );
};

export default HandlerStructure;