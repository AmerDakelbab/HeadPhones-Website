/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#52483E',
                secondary: '#8B8782',
                greenish: '#94915B',
                yellowish: '#D8B74B',
                reddish: '#883D39',
            },
            sizes: {
                '420': '420px'
            }
        },
    },
    plugins: [],
}

