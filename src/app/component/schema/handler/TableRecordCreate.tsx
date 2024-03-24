import {get} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  table: string;
  path: string;
}

const TableRecordCreate = (props: IProps) => {
  const table = get(props, 'table');
  const path = get(props, 'path', '');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-blue-500'}>
      <BlockLabel label={'TABLE_RECORD_CREATE'} />
      <p className={'text-sm'}>{table}</p>
    </ComponentSelect>
  );
};

export default TableRecordCreate;
