import {get} from 'lodash';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import BlockLabel from '@/app/component/schema/BlockLabel';

interface IProps {
  entityName: string;
  where: {[key: string]: string};
  path: string;
}

const Delete = (props: IProps) => {
  const {entityName, where, path} = props;

  return (
    <ComponentSelect path={path} className={'m-2 p-1 border-dashed border border-teal-500'}>
      <BlockLabel label={'Delete'} />
      <p className={'text-sm'}>{entityName}</p>
      <p className={'text-sm'}>Where:</p>
      <ul>
        {Object.entries(where).map(([key, value]) => (
          <li key={key} className={'text-sm'}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </ComponentSelect>
  );
};

export default Delete;
