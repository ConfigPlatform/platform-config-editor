'use client';

import { useEffect, useState } from 'react';
import useConfigurationStore from '@/app/store/configurationStore';
import { nanoid } from 'nanoid';

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


const HandlerStructure = ({ entries }: IProps) => {
  const [selectedHandler, setSelectedHandler] = useState<number | null>(null);
  const structurePath = useConfigurationStore((state) => state.structurePath);

  useEffect(() => {
    const selected = entries.findIndex((el, i) => `handlers[${i}]` === structurePath);
    setSelectedHandler(selected);
  }, [structurePath, entries]);

  const {selectedItem, setSelectedItem} = useConfigurationStore((state) => ({
    selectedItem: state.selectedItem,
    setSelectedItem: state.setSelectedItem,
  }));

  // const { selectElement } = useConfigurationStore.getState();

  return (
    <div>
      <p className={'text-xs font-bold'}>HANDLER</p>
      {entries.map((el, i) => (
        <div key={nanoid()} style={{ marginLeft: '4px' }}>
          <b
            className={`hover:text-blue-700 cursor-pointer text-xs ${selectedItem === i ? 'text-blue-700' : ''}`}
            onClick={() => {
              setSelectedItem(i);
              useConfigurationStore.setState({ structurePath: `handlers[${i}]` });
            }}
          >
            {el.name}
          </b>
        </div>
      ))}
    </div>
  );
};

export default HandlerStructure;

