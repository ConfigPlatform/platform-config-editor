'use client';

import ElementListRenderer from '@/app/component/structure/modal/ElementListRenderer';
import useConfigurationStore from '@/app/store/configurationStore';
import {nanoid} from 'nanoid';

export interface IModal {
  content: IContentModal[];
  id: string;
  placement: string;
  width: string;
}

type IContentModal = {
  type: 'text' | 'container' | 'form';
  className?: string;
  value?: string;
  content?: object[];
};

export interface IProps {
  entries: IModal[];
}

const ModalStructure = ({entries}: IProps) => {
  console.log(entries, 'modal entries');

  return (
    <div>
      <p className={'text-xs font-bold'}>MODAL</p>
      {entries.map((el, i) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b
            className={'hover:text-blue-700 cursor-pointer text-xs'}
            onClick={() => useConfigurationStore.setState({structurePath: `modals[${i}]`})}
          >
            {el.id}
          </b>
        </div>
      ))}
    </div>
  );
};

export default ModalStructure;
