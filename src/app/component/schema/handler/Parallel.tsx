import {get} from 'lodash';
import ComponentSelect from '../../wrapper/ComponentSelect';
import BlockLabel from '../BlockLabel';
import ElementListRenderer from './ElementListRenderer';

interface IProps {
  actions: [{type: string; [key: string]: any}];
  assignToVar?: string;
  path: string;
}

const Parallel = (props: IProps) => {
  const actions = get(props, 'actions', []);
  const assignToVar = get(props, 'assignToVar', '');
  const path = get(props, 'path', '');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-fuchsia-500'}>
      <BlockLabel label={'PARALLEL'} />
      <ElementListRenderer actions={actions} path={`${path}.actions`} />
      <p className={'text-sm'}>{assignToVar}</p>
    </ComponentSelect>
  );
};

export default Parallel;
