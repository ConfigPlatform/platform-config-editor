import React from 'react';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  relation: {table: string; column: string};
  of: string;
  remove?: string;
  add?: string;
  set?: {[key: string]: string};
  assignToVar?: string;
  path: string;
}

const TableRelation = (props: IProps) => {
  const {relation, of, remove, add, set, assignToVar, path} = props;
  const {table, column} = relation;

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-green-500'}>
      <BlockLabel label={'TABLE_RELATION'} />
      <p className={'text-sm'}>
        Relation: {table}.{column}
      </p>
      <p className={'text-sm'}>Of: {of}</p>
      {remove && <p className={'text-sm'}>Remove: {remove}</p>}
      {add && <p className={'text-sm'}>Add: {add}</p>}
      {set && (
        <ul>
          {Object.keys(set).map((key, index) => (
            <li key={index}>
              <p className={'text-sm'}>
                {key}: {set[key]}
              </p>
            </li>
          ))}
        </ul>
      )}
      <p className={'text-sm'}>Assign To Variable: {assignToVar}</p>
    </ComponentSelect>
  );
};

export default TableRelation;
