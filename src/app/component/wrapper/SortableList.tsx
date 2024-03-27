import {horizontalListSortingStrategy, SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {get} from 'lodash';
import {ReactNode} from 'react';

type TStrategy = 'vertical' | 'horizontal';

interface IProps {
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

const SortableList = (props: IProps) => {
  const items = get(props, 'items', []);
  const strategy = get(props, 'strategy');
  const children = get(props, 'children');

  const strategySetup = getStrategySetup(strategy);

  return (
    <SortableContext items={items} strategy={strategySetup}>
      {children}
    </SortableContext>
  );
};

export default SortableList;
