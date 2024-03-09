import React from 'react';
import BlockLabel from '@/app/component/schema/BlockLabel';
import Input, {IInput} from '@/app/component/schema/page/form/Input';

interface IFormProps {
  fields: IInput[];
}

const Form: React.FC<IFormProps> = ({fields}) => {
  return (
    <div className={'border-dashed border border-red-500 p-1 m-2'}>
      <BlockLabel label={'Form'} />
      {fields.map((el, i) => (
        <Input key={i} name={el.name} type={el.type} />
      ))}
    </div>
  );
};

export default Form;
