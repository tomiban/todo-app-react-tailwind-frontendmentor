import React from "react";

const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container md:w-auto mx-auto mt-8 md:mt-0 ">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 dark:bg-gray-700 font-bold  transition-all duration-1000">
                <button
                    onClick={(e) =>
                        changeFilter(e.target.innerText.toLowerCase())
                    }
                    className={ 
                        filter === "all"
                            ? "text-blue-600"
                            : "text-gray-500 hover:text-blue-600"
                    }
                >
                    All
                </button>
                <button
                    onClick={(e) =>
                        changeFilter(e.target.innerText.toLowerCase())
                    }
                    className={
                        filter === "active"
                            ? "text-blue-600"
                            : "text-gray-500 hover:text-blue-600"
                    }
                >
                    Active
                </button>
                <button
                    onClick={(e) =>
                        changeFilter(e.target.innerText.toLowerCase())
                    }
                    className={
                        filter === "completed"
                            ? "text-blue-600"
                            : "text-gray-500 hover:text-blue-600"
                    }
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
