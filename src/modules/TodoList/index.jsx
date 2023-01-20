import React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
} from 'react-beautiful-dnd';

const Todo = ({ title, id }) => (
  <div className="bg-green-200 py-5 px-2 rounded-lg font-bold">
    {title}
  </div>
);

const allTodos = [
  {
    id: 1,
    title: 'Wake up',
  },
  {
    id: 2,
    title: 'Drink detox tea',
  },
  {
    id: 3,
    title: 'Exercise for 20 minutes',
  },
  {
    id: 4,
    title: 'Have breakfast',
  },
  ,
  {
    id: 5,
    title: 'Garden time',
  },
  ,
  {
    id: 6,
    title: 'Work',
  },
];

const TodoList = () => {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="font-semibold text-3xl p-5 text-center tracking-[1rem] underline">
        TodoList
      </h1>
      <div>
        <DragDropContext>
          <Droppable droppableId="todos">
            {(provided) => (
              <section
                className="space-y-2"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {allTodos.map((_todo, index) => (
                  <Draggable
                    key={_todo.id}
                    draggableId={_todo.id.toString()}
                  >
                    {(provided) => (
                      <Todo
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        key={_todo.id}
                        id={_todo.id}
                        title={_todo.title}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </section>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default TodoList;
