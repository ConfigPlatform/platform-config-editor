import BlockLabel from '@/app/component/schema/BlockLabel';
import React from 'react';
import ComponentSelect from '@/app/component/wrapper/ComponentSelect';
import Draggable from '@/app/component/wrapper/Draggable';
import DefineDraggableComponent from '@/app/component/wrapper/DefineDraggableComponent';

interface IPagination {
  select: string;
  path: string;
  draggable: boolean;
}

const PaginationPreview = ({select}: IPagination) => {
  return (
    <div className={'border-dashed border border-fuchsia-500 p-1 m-2 bg-gray-300'}>
      <BlockLabel label={'Pagination'} />
      <p className={'text-sm'}>{select}</p>
    </div>
  );
};

const PaginationDraggable = ({select, path}: IPagination) => {
  return (
    <Draggable path={path} className={'m-2'}>
      <div className={'border-dashed border border-fuchsia-500 p-1'}>
        <BlockLabel label={'Pagination'} />
        <p className={'text-sm'}>{select}</p>
      </div>
    </Draggable>
  );
};

const Pagination = (props: IPagination) => (
  <DefineDraggableComponent
    componentProps={props}
    ComponentPreview={PaginationPreview}
    ComponentDraggable={PaginationDraggable}
  />
);

export default Pagination;
