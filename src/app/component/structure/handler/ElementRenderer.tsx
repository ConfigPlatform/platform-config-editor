'use client';

import {get} from 'lodash';
import ElementListRenderer from '@/app/component/structure/handler/ElementListRenderer';
import useConfigurationStore from '@/app/store/configurationStore';

interface IAction {
  type: string;
  actions?: IAction[];
  onMatch?: IAction[];
  onNotMatch?: IAction[];
  title: string;
}

interface IProps {
  ml: number;
  element: IAction;
}

const ElementRenderer = ({element, ml}: IProps) => {
  const {selectElement} = useConfigurationStore.getState();

  const nestedActions = element.actions || [];
  const onMatchActions = element.onMatch || [];
  const onNotMatchActions = element.onNotMatch || [];

  return (
    <div>
      <p
        className={'hover:text-blue-700 cursor-pointer'}
        style={{marginLeft: `${ml}px`}}
        onClick={() => selectElement({element, structure: 'handler'})}
      >
        {element.type}
      </p>
      <ElementListRenderer ml={ml} actions={nestedActions} />
      {element.type === 'condition' && (
        <>
          {onMatchActions.length > 0 && <ElementListRenderer ml={ml + 20} actions={onMatchActions} />}
          {onNotMatchActions.length > 0 && <ElementListRenderer ml={ml + 10} actions={onNotMatchActions} />}
        </>
      )}
    </div>
  );
};

export default ElementRenderer;
