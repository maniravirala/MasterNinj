/* eslint-disable react/prop-types */
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ id, value }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable-item w-full">
      {value}
    </div>
  );
};

const SortableList = ({ templateItems, onSortTemplateItems }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // const handleDragEnd = (event) => {
  //   const { active, over } = event;
  //   if (active.id !== over.id) {
  //     console.log(active.id, over.id);
  //     setTemplateItems((items) => {
  //       const oldIndex = items.findIndex((item) => item.id === active.id);
  //       const newIndex = items.findIndex((item) => item.id === over.id);
  //       return arrayMove(items, oldIndex, newIndex);
  //     });
  //   }
  // };


  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      onSortTemplateItems(active.id, over.id);
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={templateItems} strategy={verticalListSortingStrategy}>
        <div>
          {templateItems.map((item) => (
            <SortableItem key={item.id} id={item.id} value={item.component} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default SortableList;
