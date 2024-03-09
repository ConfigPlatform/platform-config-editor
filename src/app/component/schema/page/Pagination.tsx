import BlockLabel from '@/app/component/schema/BlockLabel';
import React from 'react';

interface IPagination {
  select: string;
}

const Pagination = ({select}: IPagination) => {
  return (
    <div className="border-dashed border border-fuchsia-500 p-1 m-2">
      <BlockLabel label={'Pagination'} />
      <p className={'text-sm'}>Select: {select}</p>
    </div>
  );
};

export default Pagination;
