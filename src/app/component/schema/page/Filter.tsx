import {get} from 'lodash';
import BlockLabel from '@/app/component/schema/page/BlockLabel';

const Filter = (props: object) => {
  const filterBy = get(props, 'filterBy', '');

  return (
    <div className="border-dashed border border-yellow-500 p-1 m-2">
      <BlockLabel label={'Filter'} />
      {filterBy}
    </div>
  );
};

export default Filter;
