import {FC} from 'react';
import {get} from 'lodash';

interface IProps {
  ComponentPreview: FC<any>;
  ComponentDraggable: FC<any>;
  componentProps: {[key: string]: any};
}

const DefineDraggableComponent = (props: IProps) => {
  const {ComponentPreview, ComponentDraggable, componentProps} = props;

  const preview = get(props, 'componentProps.preview', false);

  // display preview component if preview true
  if (preview) return <ComponentPreview {...componentProps} />;

  return <ComponentDraggable {...componentProps} />;
};

export default DefineDraggableComponent;
