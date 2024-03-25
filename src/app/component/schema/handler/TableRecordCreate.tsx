import {get, omit} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  table: string;
  path: string;
}

const TableRecordCreate = (props: IProps) => {
  const path = get(props, 'path', '');

  const actionConfig = omit(props, 'path', 'type');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-blue-500'}>
      <BlockLabel label={'TABLE_RECORD_CREATE'} />
      <pre>{JSON.stringify(actionConfig, null, 2)}</pre>
    </ComponentSelect>
  );
};

export default TableRecordCreate;
