/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'wa-purple': '#826a9d',
                'wa-paper': '#f9f8f4',
                'wa-tape': '#d1c1d7',
                'wa-ink': '#2d2a26',
            },
            fontFamily: {
                'serif-jp': ['"Noto Serif JP"', '"Noto Serif TC"', 'serif'],
                'handwriting': ['"Klee One"', 'cursive'],
                'sans-tc': ['"Noto Sans TC"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
