import React from "react";
import TodoFilter from "./TodoFilter";

const TodoComputed = ({ itemsLeft, clearCompleted, filter, changeFilter }) => {
    return (
        <section className="flex justify-between gap-4 rounded-b-md  border-b-gray-200 bg-white p-4 md:px-4 md:py-1 text-gray-500 transition-all duration-1000  dark:bg-gray-700 items-center">
            <span>
                {itemsLeft === 0 ? "All completed" : itemsLeft + " items left"}{" "}
            </span>
             <TodoFilter changeFilter={changeFilter} filter={filter} />
            <button onClick={clearCompleted}>Clear Completed</button>
        </section>
    );
};

export default TodoComputed;
