import {get, omit} from 'lodash';
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
  const {path} = props;

  const actionConfig = omit(props, 'path', 'type');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-pink-500'}>
      <BlockLabel label={'TABLE_RECORD_UPDATE'} />
      <pre>{JSON.stringify(actionConfig, null, 2)}</pre>
    </ComponentSelect>
  );
};

export default TableRecordUpdate;
