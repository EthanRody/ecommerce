module.exports = {
    theme: {
        colors: {
            primary: '#22577a',
            secondary: '#c7f9cc',
            colour2: '#80ed99',
            colour3: '#57cc99',
            colour4: '38a3a5',
            white: '#ffffff',
            black: '#000000',
            // Add other colors as needed
          },
        extend: {
            screens: {
                xs: "475px",
            },
            fontFamily: {
                sans: ['Open_Sans', 'sans-serif'],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                100: "2px 2px 0px 0px rgb(0, 0, 0)",
                200: "2px 2px 0px 2px rgb(0, 0, 0)",
                300: "2px 2px 0px 2px rgb(238, 43, 105)",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}