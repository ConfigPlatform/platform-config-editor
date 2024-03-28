import {get} from 'lodash';
import BlockLabel from '@/app/component/schema/BlockLabel';
import DefineDraggableComponent from '@/app/component/wrapper/DefineDraggableComponent';
import React from 'react';
import Draggable from '@/app/component/wrapper/Draggable';

interface IFilter {
  filterBy: string;
  path: string;
  preview: boolean;
}

const FilterPreview = (props: IFilter) => {
  const filterBy = get(props, 'filterBy', '');

  return (
    <div className={'m-2 border-dashed border border-yellow-500 p-1 bg-gray-300'}>
      <BlockLabel label={'Filter'} />
      <p className={'text-sm'}>{filterBy}</p>
    </div>
  );
};

const FilterDraggable = (props: IFilter) => {
  const filterBy = get(props, 'filterBy', '');
  const path = get(props, 'path', '');

  return (
    <Draggable path={path} className={'m-2 border-dashed border border-yellow-500 p-1'}>
      <BlockLabel label={'Filter'} />
      <p className={'text-sm'}>{filterBy}</p>
    </Draggable>
  );
};

const Filter = (props: IFilter) => (
  <DefineDraggableComponent
    componentProps={props}
    ComponentPreview={FilterPreview}
    ComponentDraggable={FilterDraggable}
  />
);

export default Filter;
