import {ReactNode} from 'react';
import {
  closestCenter,
  Collision,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {patchRequest} from '@/app/util/request/request';
import {get} from 'lodash';
import useConfigurationStore from '@/app/store/configurationStore';
import {defineScope} from '@/app/component/schema/Schema';

interface IProps {
  children: ReactNode;
}

const DndDragDrop = ({children}: IProps) => {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor), useSensor(KeyboardSensor));

  const elementPath = useConfigurationStore((state) => state.elementPath);

  // define scope
  const scope = defineScope(elementPath);

  // drag end
  const handleDragEnd = async (e: DragEndEvent) => {
    console.log(e);

    const activePath = e.active.id;
    const overPath = get(e, 'over.id', null);

    await patchRequest({
      url: '/api/configuration/drag_end',
      data: {activePath, overPath, scope},
    });
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      {children}
    </DndContext>
  );
};

export default DndDragDrop;
