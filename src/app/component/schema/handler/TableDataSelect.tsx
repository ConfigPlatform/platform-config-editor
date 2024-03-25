import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';
import {omit} from 'lodash';

interface IProps {
  select: string | {column: string; alias: string}[];
  from: {table: string};
  assignToVar: string;
  path: string;
}

const TableDataSelect = (props: IProps) => {
  const {path} = props;

  const actionConfig = omit(props, 'path', 'type');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-yellow-500'}>
      <BlockLabel label={'TABLE_DATA_SELECT'} />
      <pre>{JSON.stringify(actionConfig, null, 2)}</pre>
    </ComponentSelect>
  );
};

export default TableDataSelect;
