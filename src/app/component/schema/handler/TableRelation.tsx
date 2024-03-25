import React from 'react';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';
import {omit} from 'lodash';

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
  const {path} = props;

  const actionConfig = omit(props, 'path', 'type');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-indigo-500'}>
      <BlockLabel label={'TABLE_RELATION'} />
      <pre>{JSON.stringify(actionConfig, null, 2)}</pre>
    </ComponentSelect>
  );
};

export default TableRelation;
