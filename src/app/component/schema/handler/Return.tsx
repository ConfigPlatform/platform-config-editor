import {get, omit} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  data: {[key: string]: any}[];
  config: {[key: string]: any}[];
  path: string;
}

const Return = (props: IProps) => {
  const path = get(props, 'path', '');

  const actionConfig = omit(props, 'path', 'type');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-slate-500'}>
      <BlockLabel label={'RETURN'} />
      <pre>{JSON.stringify(actionConfig, null, 2)}</pre>
    </ComponentSelect>
  );
};

export default Return;
