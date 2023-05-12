import React from "react";
import IconMoon from "./icons/MoonIcon";

const Header = () => {
    return (
        <header className="container mx-auto px-6 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-[500] uppercase tracking-[0.3em] text-white">
                    todo
                </h1>
                <button>
                    <IconMoon />{" "}
                </button>
            </div>
        </header>
    );
};

export default Header;
