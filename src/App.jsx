import { useEffect, useMemo, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [
    { id: 1, title: "Developed by tømib4n", completed: false },
];
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

    return (
        <div className='min-h-screen bg-gray-200 bg-[url("./assets/images/bg-mobile-light.jpg")] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url("./assets/images/bg-mobile-dark.jpg")]'>
            <Header />

            <main className="container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo} />
                <TodoList
                    //mando el filtro como vista
                    todos={filteredTodos}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
                <TodoComputed
                    itemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
