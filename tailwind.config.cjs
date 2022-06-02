const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['uncut-sans', ...defaultTheme.fontFamily.sans],
				serif: ['sprat', ...defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
