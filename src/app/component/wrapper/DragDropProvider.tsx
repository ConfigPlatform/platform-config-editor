import {ReactNode, useEffect, useMemo} from 'react';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {patchRequest} from '@/app/util/request/request';
import {get} from 'lodash';
import useConfigurationStore from '@/app/store/configurationStore';
import {defineScope} from '@/app/component/schema/Schema';
import schemaMap from '@/app/component/schema/schemaMap';
import useDragDropStore from '@/app/store/dragDropStore';

interface IDefineChildrenPaths {
  element: object;
  path: string;
  pathList: string[];
}

interface IProps {
  children: ReactNode;
}

// function return component's paths
const definePathSchema = ({element, path, pathList}: IDefineChildrenPaths): string[] => {
  let nextPath = path;

  const type = get(element, 'type', '');
  let content = null;

  if (type === 'table') {
    content = get(element, 'columns', []);
    nextPath = `${path}.columns`;
  }

  if (!content) {
    content = get(element, 'content', []);
    nextPath = `${path}.content`;
  }

  pathList.push(path);

  // loop content for define children paths
  for (const index in content) {
    const child = content[index];
    const childPath = `${nextPath}[${index}]`;

    pathList.push(childPath);

    // recursively call fn to define child path
    definePathSchema({element: child, path: childPath, pathList});
  }

  return [...new Set(pathList)];
};

const DragDropProvider = ({children}: IProps) => {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor), useSensor(KeyboardSensor));

  const selectedElementPath = useDragDropStore((state) => state.selectedElementPath);
  const element = useConfigurationStore((state) => get(state, `configuration.${selectedElementPath}`));

  // define scope
  const scope = defineScope(selectedElementPath);

  const SchemaRenderer = schemaMap[scope!];

  // drag start
  const handleDragStart = (e: DragStartEvent) => {
    const path = get(e, 'active.id', '') as string;

    // update selected element path
    useDragDropStore.setState({selectedElementPath: path});
  };

  // drag end
  const handleDragEnd = async (e: DragEndEvent) => {
    console.log(e);

    const activePath = e.active.id;
    const overPath = get(e, 'over.id', null);

    // send request with drop data to update configuration
    await patchRequest({
      url: '/api/configuration/drag_end',
      data: {activePath, overPath, scope},
    });

    // show all elements
    useDragDropStore.setState({hiddenElementPathList: [], selectedElementPath: ''});
  };

  // define hidden element paths
  const hiddenElementPathList = useMemo(() => {
    // empty array if no element selected
    if (!selectedElementPath) return [];

    // define children paths
    const pathSchema = definePathSchema({element, path: selectedElementPath, pathList: []});

    // receive unique paths
    const uniquePaths = [...new Set([selectedElementPath, ...pathSchema])];

    return uniquePaths;
  }, [selectedElementPath]);

  useEffect(() => {
    // save hidden element paths
    useDragDropStore.setState({hiddenElementPathList});
  }, [hiddenElementPathList]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {children}
      <DragOverlay style={{width: 'auto'}}>
        {selectedElementPath && <SchemaRenderer path={selectedElementPath} element={element} preview={true} />}
      </DragOverlay>
    </DndContext>
  );
};

export default DragDropProvider;
