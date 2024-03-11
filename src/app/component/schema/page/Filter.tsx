import {get} from 'lodash';
import BlockLabel from '@/app/component/schema/BlockLabel';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';

interface IProps {
  filterBy: string;
  path: string;
}

const Filter = (props: IProps) => {
  const filterBy = get(props, 'filterBy', '');
  const path = get(props, 'path', '');

  return (
    <div className={'m-2'}>
      <ComponentSelect path={path}>
        <div className="border-dashed border border-yellow-500 p-1">
          <BlockLabel label={'Filter'} />
          <p className={'text-sm'}>{filterBy}</p>
        </div>
      </ComponentSelect>
    </div>
  );
};

export default Filter;
