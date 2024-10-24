/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: '#328632',
				'primary-500': '#389438',
				'primary-50': '#63C563',
				'primary-100': '#5CC25C',
				'primary-200': '#4DBC4D',
				'primary-300': '#43B243',
				'primary-400': '#3DA33D',
				'primary-500': '#389438',
				'primary-600': '#328632',
				'primary-700': '#2A6F2A',
				'primary-800': '#215921',
				'primary-900': '#194319',
				'primary-light-50': '#FDFEFD',
				'primary-light-100': '#FBFEFB',
				'primary-light-200': '#F8FCF8',
				'primary-light-300': '#F4FBF4',
				'primary-light-400': '#F0F9F0',
				'primary-light-500': '#EDF8ED',
				'primary-light-600': '#E9F7E9',
				'primary-light-700': '#E5F5E5',
				'primary-light-800': '#E1F4E1',
				'primary-light-900': '#DEF2DE',
			},
		},
	},
	plugins: [
		// require('@tailwindcss/aspect-ratio'),
	],
};
