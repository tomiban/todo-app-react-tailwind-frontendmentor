import React from "react";
import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({
    todo: { title, completed, id },
    removeTodo,
    updateTodo,
}) => {
    return (
        <article className="flex justify-between gap-4 rounded-t-md border-b-[1.5px] border-b-gray-400 dark:border-b-gray-500 transition-all duration-1000"> 
            <div className="flex gap-4 ">
                <button
                    onClick={() => updateTodo(id)}
                    className={` h-6 w-6 rounded-full ${
                        completed
                            ? "bg-gradient-to- grid place-items-center bg-gradient-to-br from-indigo-500 from-40%  to-purple-500 to-60%"
                            : "inline-block border-2 border-gray-200 dark:border-gray-500 transition-all duration-1000"
                    } `}
                >
                    {completed && <IconCheck stroke={"#FFF"} />}
                </button>

                <p
                    className={`leading-7 ${
                        completed
                            ? "text-gray-500 line-through"
                            : "text-gray-500 dark:text-gray-300 transition-all duration-1000"
                    }`}
                >
                    {title}
                </p>
            </div>
            <button className="px-2" onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItem;
