import Input, {IInput} from '@/app/component/schema/page/form/Input';
import React from 'react';
import {get} from 'lodash';

interface IProps {
  fields: IInput[];
  path: string;
}

const InputList = (props: IProps) => {
  const fields = get(props, 'fields', []);
  const path = get(props, 'path', '');

  return fields.map((el, i) => <Input key={i} {...el} path={`${path}.fields[${i}]`} />);
};

export default InputList;
