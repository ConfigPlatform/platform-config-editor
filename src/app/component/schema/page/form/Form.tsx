import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import Input, {IInput} from '@/app/component/schema/page/form/Input';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import {get} from 'lodash';
import InputList from '@/app/component/schema/page/form/InputList';
import ElementListRenderer from '@/app/component/schema/page/ElementListRenderer';

interface IFormProps {
  fields: IInput[];
  path: string;
}

const Form: React.FC<IFormProps> = (props) => {
  const fields = get(props, 'fields', []);
  const actions = get(props, 'actions', []);
  const path = get(props, 'path', '');

  return (
    <div className={'m-2'}>
      <ComponentSelect path={path}>
        <div className={'border-dashed border border-red-500 p-1'}>
          <BlockLabel label={'Form'} />
          <InputList fields={fields} path={path} />
          <ElementListRenderer content={actions} path={path} />
        </div>
      </ComponentSelect>
    </div>
  );
};

export default Form;
