import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <div className='min-h-screen bg-gray-200 bg-[url("./assets/images/bg-mobile-light.jpg")] bg-contain bg-no-repeat'>
            <header className="container mx-auto px-6 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-[500] uppercase tracking-[0.3em] text-white">
                        todo
                    </h1>
                    <button><MoonIcon /> </button>
                </div>
                <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
                    <span className="inline-block h-6 w-6 rounded-full border-2 border-gray-300"></span>
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>

            <main className="container mx-auto mt-8 px-4">
                <div className="rounded-md bg-white [&>article]:p-4">
                    <article className="flex justify-between gap-4 border-b-[3px] border-b-gray-200  ">
                        <div className="flex gap-4">
                            <button className="inline-block h-6 w-6 rounded-full border-2 border-gray-300"></button>
                            <p className="leading-7 text-gray-600">TAREA 1</p>
                        </div>
                        <button className="px-2">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex justify-between gap-4 border-b-[3px] border-b-gray-200  ">
                        <div className="flex gap-4">
                            <button className="inline-block h-6 w-6 rounded-full border-2 border-gray-300"></button>
                            <p className="leading-7 text-gray-600">TAREA 2</p>
                        </div>
                        <button className="px-2">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex justify-between  text-gray-400">
                        <span>5 items left</span>
                        <button>Clear Completed</button>
                    </article>
                </div>
            </main>

            <section className="container mx-auto mt-8 px-4">
                <div className="bg-white p-4 rounded-md flex justify-center gap-3">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>

            <p className="capilize text-center mt-12 text-gray-400">
                Drag and drop to reorder list
            </p>
        </div>
    );
};

export default App;
