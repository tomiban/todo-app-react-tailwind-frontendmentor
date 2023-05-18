import { useEffect, useMemo, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [
    { id: 1, title: "Developed by tømib4n", completed: false },
];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    //Creo un estado para almacenar el filtro que me llega del componente filter
    const [filter, setFilter] = useState("all");

    //Armo un objeto que almacene las funciones correspondientes a cada filtro
    const filterFunctions = {
        all: (todos) => todos,
        active: (todos) => todos.filter((todo) => !todo.completed),
        completed: (todos) => todos.filter((todo) => todo.completed),
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos, filter]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        };
        // Copia los todos anteriores en el arreglo y le agrega el nuevo al final
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id) => {
        const updateTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );

        const sortedTodos = updateTodos.sort((a, b) => (a.completed ? -1 : 1));

        setTodos(sortedTodos);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    //defino la funcion que actualiza el filtro al hacer click
    const changeFilter = (newFilter) => {
        setFilter(newFilter);
    };

    //Guardo el arreglo segun el objeto accedido por el filtro elegido
    const filteredTodos = filterFunctions[filter](todos);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const startIndex = result.source.index;
        const endIndex = result.destination.index;

        const items = [...todos];
        const draggedItem = items[startIndex];
        const destinationItem = items[endIndex];

        if (!draggedItem.completed && destinationItem.completed) {
            // La tarea arrastrada es incompleta y la tarea de destino es completa,
            // no permitir el reordenamiento
            return;
        }

        items.splice(startIndex, 1);
        items.splice(endIndex, 0, draggedItem);

        setTodos(items);
    };

    return (
        <div className="min-h-screen bg-gray-200 bg-light-mobile bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-dark-mobile md:bg-light-desktop md:dark:bg-dark-desktop ">
            <Header />

            <main className="container mx-auto mt-20 px-4 md:mt-10 md:max-w-xl">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoCreate createTodo={createTodo} />
                    <TodoList
                        todos={filteredTodos}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                    <TodoComputed
                        itemsLeft={computedItemsLeft}
                        clearCompleted={clearCompleted}
                    />
                    <TodoFilter changeFilter={changeFilter} filter={filter} />
                </DragDropContext>
            </main>
            <Footer />
        </div>
    );
};

export default App;
