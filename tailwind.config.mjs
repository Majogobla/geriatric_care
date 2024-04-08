const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
        'sans': ['Georgia', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
	darkMode: 'class',
}
