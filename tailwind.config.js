/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "light-mobile": 'url("./assets/images/bg-mobile-light.jpg")',
                "dark-mobile": 'url("./assets/images/bg-mobile-dark.jpg")',
                "light-desktop": 'url("./assets/images/bg-desktop-light.jpg")',
                "dark-desktop": 'url("./assets/images/bg-desktop-dark.jpg")',
            },
        },
        plugins: [],
    },
};
