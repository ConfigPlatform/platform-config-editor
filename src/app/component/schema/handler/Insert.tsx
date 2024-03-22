import {get} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  entityName: string;
  path: string;
}

const Insert = (props: IProps) => {
  const entityName = get(props, 'entityName');
  const path = get(props, 'path', '');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-orange-500'}>
      <BlockLabel label={'Insert'} />
      <p className={'text-sm'}>{entityName}</p>
    </ComponentSelect>
  );
};

export default Insert;
