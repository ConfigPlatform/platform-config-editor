import React, {ReactNode} from 'react';
import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/handler/ElementListRenderer';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';

interface IProps {
  children: ReactNode;
  condition: string;
  onMatch: {type: string; [key: string]: any}[];
  onNotMatch: {type: string; [key: string]: any}[];
  path: string;
}

const Condition: React.FC<IProps> = (props) => {
  const condition = get(props, 'condition', '');
  const onMatch = get(props, 'onMatch', []);
  const onNotMatch = get(props, 'onNotMatch', []);
  const path = get(props, 'path', '');

  return (
    <ComponentSelect path={path} className={'m-2 border-dashed border border-violet-500'}>
      <BlockLabel label={'CONDITION'} />
      {condition && <ElementListRenderer actions={onMatch} path={`${path}.onMatch`} />}
      {!condition && <ElementListRenderer actions={onNotMatch} path={`${path}.onNotMatch`} />}
    </ComponentSelect>
  );
};

export default Condition;
