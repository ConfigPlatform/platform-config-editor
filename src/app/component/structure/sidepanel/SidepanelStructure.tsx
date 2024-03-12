'use client';

import useConfigurationStore from '@/app/store/configurationStore';
import {nanoid} from 'nanoid';


export interface ISidepanel {
  className: string;
  content: IContent[];
}

export interface IContent {
  content: IContentContent[];
  path: string;
  type: string;
}
export interface IContentContent {
  className: string;
  type: string;
  value: string;
}

interface IProps {
  sidepanel: object;
}

const SidepanelStructure = ({sidepanel}: IProps) => {
  return (
    <div>
      <p className={'text-xs font-bold'}>Sidepanel</p>

      {sidepanel.map((el, i) => (
        <div key={nanoid()} style={{marginLeft: '4px'}}>
          <b
            className={'hover:text-blue-700 cursor-pointer text-xs'}
            onClick={() => useConfigurationStore.setState({structurePath: `sidepanels[${i}]`})}
          >
            {el.id}
          </b>
        </div>
      ))}
    </div>
  );
};

export default SidepanelStructure;