import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';
import {get, omit} from 'lodash';

interface IProps {
  variable: string;
  path: string;
}

const VariableUpdate = (props: IProps) => {
  const path = get(props, 'path', '');

  const actionConfig = omit(props, 'path', 'type');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-green-500'}>
      <BlockLabel label={'VARIABLE_UPDATE'} />
      {JSON.stringify(actionConfig, null, 2)}
    </ComponentSelect>
  );
};

export default VariableUpdate;
