'use client';

import {get} from 'lodash';
import ElementListRenderer from '@/app/component/schema/handler/ElementListRenderer';
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

  const nestedActions = get(element, 'actions', []);
  const onMatchActions = get(element, 'onMatch', []);
  const onNotMatchActions = get(element, 'onNotMatch', []);
  console.log('Nested', nestedActions);

  return (
    <div>
      <p
        className={'hover:text-blue-700 cursor-pointer text-xs'}
        style={{marginLeft: `${ml}px`}}
        onClick={() => selectElement({element, structure: 'handler'})}
      >
        {element.type}
      </p>
      <ElementListRenderer ml={ml} actions={nestedActions} />
      {element.type === 'condition' && (
        <>
          {onMatchActions.length > 0 && <ElementListRenderer ml={ml} actions={onMatchActions} />}
          {onNotMatchActions.length > 0 && <ElementListRenderer ml={ml} actions={onNotMatchActions} />}
        </>
      )}
    </div>
  );
};

export default ElementRenderer;
