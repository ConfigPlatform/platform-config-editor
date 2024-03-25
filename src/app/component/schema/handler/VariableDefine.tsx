import {get, omit} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  name: string;
  path: string;
}

const VariableDefine = (props: IProps) => {
  const path = get(props, 'path', '');

  const actionConfig = omit(props, 'path', 'type');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-red-500'}>
      <BlockLabel label={'VARIABLE_DEFINE'} />
      {JSON.stringify(actionConfig, null, 2)}
    </ComponentSelect>
  );
};

export default VariableDefine;
