import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  select: string | {column: string; alias: string}[];
  from: {table: string};
  assignToVar: string;
  path: string;
}

const TableDataSelect = (props: IProps) => {
  const {select, from, assignToVar, path} = props;
  const table = from.table;

  const renderSelect = () => {
    if (typeof select === 'string') {
      return <p className={'text-sm'}>Select: {select}</p>;
    }
    return (
      <ul>
        {select.map((item, index) => (
          <li key={index}>
            <p className={'text-sm'}>Column: {item.column}</p>
            <p className={'text-sm'}>Alias: {item.alias}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-yellow-500'}>
      <BlockLabel label={'TABLE_DATA_SELECT'} />
      {renderSelect()}
      <p className={'text-sm'}>From: {table}</p>
      <p className={'text-sm'}>Assign To Variable: {assignToVar}</p>
    </ComponentSelect>
  );
};

export default TableDataSelect;
