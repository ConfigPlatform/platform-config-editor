import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';
import {get} from 'lodash';

interface IProps {
  variable: string;
  path: string;
}

const VariableUpdate = (props: IProps) => {
  const variable = get(props, 'variable', '');
  const path = get(props, 'path', '');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-green-500'}>
      <BlockLabel label={'VARIABLE_UPDATE'} />
      <p className={'text-sm'}>{variable}</p>
    </ComponentSelect>
  );
};

export default VariableUpdate;
