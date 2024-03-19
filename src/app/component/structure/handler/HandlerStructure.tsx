'use client';

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
  return (
    <div>
      <p className={'text-xs font-bold'}>HANDLER</p>

      {entries.map((el, i) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b
            className={'hover:text-blue-700 cursor-pointer text-xs'}
            onClick={() => useConfigurationStore.setState({structurePath: `handler[${i}]`})}
          >
            {el.name}
          </b>
        </div>
      ))}
    </div>
  );
};

export default HandlerStructure;
