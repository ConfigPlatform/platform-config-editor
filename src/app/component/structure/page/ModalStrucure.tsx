'use client';

import {nanoid} from 'nanoid';
import ElementListRenderer from '@/app/component/structure/page/ElementListRenderer';
import useConfigurationStore from '@/app/store/configurationStore';

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
  content?: Array<IContentModal | Form>;
};

export interface IProps {
  modals: IModal[];
}

const ModalStructure = ({modals}: IProps) => {
  const {selectElement} = useConfigurationStore.getState();

  return (
    <div>
      {modals.map((el) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b
            className={'hover:text-blue-700 cursor-pointer'}
            onClick={() => selectElement({element: el, structure: 'page'})}
          >
            {el.id}
          </b>
          <ElementListRenderer ml={4} content={el.content} title="pages" />
        </div>
      ))}
    </div>
  );
};

export default ModalStructure;
