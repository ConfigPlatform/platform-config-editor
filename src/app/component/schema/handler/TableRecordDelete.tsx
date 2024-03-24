import {get} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  from: {table: string};
  where: {condition: string; data: {[key: string]: any}};
  path: string;
}

const TableRecordDelete = (props: IProps) => {
  const {from, where, path} = props;
  const table = from.table;
  const condition = where.condition;
  const data = where.data;
  const entityId = get(data, 'entityId');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-teal-500'}>
      <BlockLabel label={'TABLE_RECORD_DELETE'} />
      <p className={'text-sm'}>{table}</p>
      <p className={'text-sm'}>{condition}</p>
      <p className={'text-sm'}>{entityId}</p>
    </ComponentSelect>
  );
};

export default TableRecordDelete;
