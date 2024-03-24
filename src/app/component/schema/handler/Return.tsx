import {get} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  data: {[key: string]: any}[];
  config: {[key: string]: any}[];
  path: string;
}

const Return = (props: IProps) => {
  const data = get(props, 'data', []);
  const config = get(props, 'config', []);
  const path = get(props, 'path', '');
  const items = get(data, 'items', '');
  const totalCount = get(data, 'totalCount', '');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-slate-500'}>
      <BlockLabel label={'RETURN'} />
      <ul>
        {config &&
          config.map((item, index) => (
            <li key={index}>
              <p className={'text-sm'}>Client Handler: {item.clientHandler}</p>
              {item.path && <p className={'text-sm'}>Redirect Path: {item.path}</p>}
            </li>
          ))}
      </ul>
      <ul>
        {data && (
          <>
            <p className={'text-sm'}>{items}</p>
            <p className={'text-sm'}>{totalCount}</p>
          </>
        )}
      </ul>
      <ul>
        {typeof data === 'string' && (
          <>
            <p className={'text-sm'}>{data}</p>
          </>
        )}
      </ul>
    </ComponentSelect>
  );
};

export default Return;
