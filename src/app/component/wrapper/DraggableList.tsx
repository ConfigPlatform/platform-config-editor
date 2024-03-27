import {
  horizontalListSortingStrategy,
  SortableContext,
  verticalListSortingStrategy,
  rectSwappingStrategy,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import {get} from 'lodash';
import {ReactNode} from 'react';

type TStrategy = 'vertical' | 'horizontal';

interface IProps {
  id: string;
  items: string[];
  strategy: TStrategy;
  children: ReactNode;
}

const getStrategySetup = (strategy: TStrategy): any => {
  switch (strategy) {
    case 'vertical':
      return verticalListSortingStrategy;

    case 'horizontal':
      return horizontalListSortingStrategy;
  }
};

const DraggableList = (props: IProps) => {
  const items = get(props, 'items', []);
  const strategy = get(props, 'strategy');
  const children = get(props, 'children');
  const id = get(props, 'path');

  const strategySetup = getStrategySetup(strategy);

  return (
    <SortableContext id={id} items={items} strategy={strategySetup}>
      {children}
    </SortableContext>
  );
};

export default DraggableList;
