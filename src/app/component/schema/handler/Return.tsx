import {get} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  config: {[key: string]: any}[];
  path: string;
}

const Return = (props: IProps) => {
  const {config, path} = props;

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-slate-500'}>
      <BlockLabel label={'Return'} />
      <ul>
        {config &&
          config.map((item, index) => (
            <li key={index}>
              <p className={'text-sm'}>Client Handler: {item.clientHandler}</p>
              {item.path && <p className={'text-sm'}>Redirect Path: {item.path}</p>}
            </li>
          ))}
      </ul>
    </ComponentSelect>
  );
};

export default Return;
