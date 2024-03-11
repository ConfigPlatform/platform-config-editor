import BlockLabel from '@/app/component/schema/BlockLabel';
import React from 'react';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';

interface IPagination {
  select: string;
  path: string;
}

const Pagination = ({select, path}: IPagination) => {
  return (
    <div className={'m-2'}>
      <ComponentSelect path={path}>
        <div className={'border-dashed border border-fuchsia-500 p-1'}>
          <BlockLabel label={'Pagination'} />
          <p className={'text-sm'}>Select: {select}</p>
        </div>
      </ComponentSelect>
    </div>
  );
};

export default Pagination;
