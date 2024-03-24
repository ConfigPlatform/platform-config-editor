import {get} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  update: string;
  set: {[field: string]: string};
  where: {condition: string; data: {[key: string]: any}};
  assignToVar?: string;
  path: string;
}

const TableRecordUpdate = (props: IProps) => {
  const {update, set, where, assignToVar, path} = props;
  const table = update;
  const setFields = Object.entries(set).map(([field, value]) => (
    <p key={field} className={'text-sm'}>{`${field}: ${value}`}</p>
  ));
  const condition = where.condition;
  const data = where.data;
  const entityId = get(data, 'entityId');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-pink-500'}>
      <BlockLabel label={'TABLE_RECORD_UPDATE'} />
      <p className={'text-sm'}>{table}</p>
      <div className={'text-sm'}>{setFields}</div>
      <p className={'text-sm'}>{condition}</p>
      <p className={'text-sm'}>{entityId}</p>
      {assignToVar && <p className={'text-sm'}>{assignToVar}</p>}
    </ComponentSelect>
  );
};

export default TableRecordUpdate;
