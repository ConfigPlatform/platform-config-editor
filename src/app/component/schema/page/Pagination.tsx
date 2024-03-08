import {get} from 'lodash';
import BlockLabel from '@/app/component/schema/page/BlockLabel';

const Pagination = (props: object) => {
  return (
    <div className="border-dashed border border-yellow-500 p-1 m-2">
      <BlockLabel label={'Pagination'} />
    </div>
  );
};

export default Pagination;
