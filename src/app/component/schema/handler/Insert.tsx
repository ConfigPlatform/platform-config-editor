import {get} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IField {
  entityField: string;
  value: string;
}

interface IProps {
  entityName: string;
  fields: IField[];
  path: string;
}

const Insert = (props: IProps) => {
  const entityName = get(props, 'entityName');
  const fields = get(props, 'fields', []);
  const path = get(props, 'path', '');

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-orange-500'}>
      <BlockLabel label={'Insert'} />
      <p>{entityName}</p>
      <ul>
        {fields.map((field, index) => (
          <li key={index}>
            {field.entityField}: {field.value}
          </li>
        ))}
      </ul>
    </ComponentSelect>
  );
};

export default Insert;
