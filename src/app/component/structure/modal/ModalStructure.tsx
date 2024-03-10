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
  const {selectElement} = useConfigurationStore.getState();

  return (
    <div>
      <p className={'font-bold text-xs'}>MODAL</p>
      {entries.map((el) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b
            className={'hover:text-blue-700 cursor-pointer'}
            onClick={() => selectElement({entries: el, scope: 'modal'})}
          >
            {el.id}
          </b>
          <ElementListRenderer ml={0} content={el.content} title="modals" />
        </div>
      ))}
    </div>
  );
};

export default ModalStructure;
