'use client';

import useConfigurationStore from '@/app/store/configurationStore';
import {nanoid} from 'nanoid';

export interface ISidepanel {
  className: string;
  content: object[];
}

interface IProps {
  sidepanel: ISidepanel[];
}

const SidepanelStructure = ({sidepanel}: IProps) => {
  return (
    <div>
      <p className={'text-xs font-bold'}>SIDE PANEL</p>
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
