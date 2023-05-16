import React, { useEffect, useState } from "react";
import IconMoon from "./icons/MoonIcon";
import IconSun from "./icons/IconSun";

const Header = () => {
    const initialStateDarkMode = localStorage.getItem('theme') === "dark"
    
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark");
             localStorage.setItem("theme", "light")
        }
        
    }, [darkMode]);

    return (
        <header className="container mx-auto px-6 pt-8 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="text-3xl font-[500] uppercase tracking-[0.3em] text-white md:mt-10">
                    todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}{" "}
                </button>
            </div>
        </header>
    );
};

export default Header;
