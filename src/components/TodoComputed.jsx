import React from "react";

const TodoComputed = ({itemsLeft, clearCompleted}) => {
    return (
        <section className="flex justify-between gap-4 rounded-b-md  border-b-gray-200 bg-white p-4 text-gray-500 dark:bg-gray-700 dark:transition-all dark:duration-500">
            <span>{itemsLeft === 0 ? "All completed": (itemsLeft) + " items left"} </span>
            <button onClick={clearCompleted}>Clear Completed</button>
        </section>
    );
};

export default TodoComputed;
