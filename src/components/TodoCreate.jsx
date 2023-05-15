import React, { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        if (title.trim().length > 0) {
            createTodo(title);
            setTitle("");
        }
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className=" flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 dark:bg-gray-700 dark:transition-all dark:duration-500"  
        >
            <span className="h-6 w-6 rounded-full border-2 border-gray-200 dark:border-gray-500"></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full text-gray-400 outline-none dark:bg-gray-700 dark:transition-all dark:duration-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
