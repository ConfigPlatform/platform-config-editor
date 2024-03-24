import {get} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  name: string;
  path: string;
}

const VariableDefine = (props: IProps) => {
  const name = get(props, 'name');
  const path = get(props, 'path', '');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-red-500'}>
      <BlockLabel label={'VARIABLE_DEFINE'} />
      <p className={'text-sm'}>{name}</p>
    </ComponentSelect>
  );
};

export default VariableDefine;
