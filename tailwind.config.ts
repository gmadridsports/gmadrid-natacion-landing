import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        backgroundColor: theme => ({
            ...theme.colors,
            'blue': '#4994EC',
        }),
        textColor: theme => ({
            ...theme.colors,
            'blue': '#4994EC',
        })
        //     extend: extend => ({
        //         colors: {
        //             ...extend.colors,
        //             primary: '#4994EC',
        //         }
        //     }),
    },
    plugins: [],
}

export default config
