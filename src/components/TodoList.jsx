import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <div
                    {...droppableProvided.droppableProps}
                    ref={droppableProvided.innerRef}
                    className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-700 [&>article]:p-4"
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            draggableId={`${todo.id}`}
                            index={index}
                        >
                            {(provided) => (
                                <TodoItem
                                    {...provided.draggableProps}
                                    ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                    todo={todo}
                                    removeTodo={removeTodo}
                                    updateTodo={updateTodo}
                                />
                            )}
                        </Draggable>
                    ))}
                     {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
