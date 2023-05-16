import React, { useState } from "react";
import IconCross from "./icons/IconCross";

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
            className=" flex items-center gap-4 rounded-md bg-white px-4 py-4 dark:bg-gray-700 transition-all duration-1000"
        >
            <span className="inline-block h-6 w-[1.8rem] rounded-full border-2 border-gray-200 dark:border-gray-500 transition-all duration-1000"></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full text-gray-400 outline-none dark:bg-gray-700 transition-all duration-1000"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
