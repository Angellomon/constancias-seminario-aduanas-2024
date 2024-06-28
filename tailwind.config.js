/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			display: ['"Montserrat Regular"'],
			body: ['"Montserrat Regular"']
		},

		extend: {
			backgroundImage: {
				'planes-pattern-md': "url('/img/fondo-aviones_md.jpg')",
				'planes-pattern-lg': "url('/img/fondo-aviones_lg.jpg')",
				'planes-pattern-xl': "url('/img/fondo-aviones_xl.jpg')",
				'cargo-img-md': "url('/img/fondo-cargo_md.jpg')",
				'cargo-img-lg': "url('/img/fondo-cargo_lg.jpg')",
				'cargo-img-xl': "url('/img/fondo-cargo_xl.jpg')"
			},
			colors: {
				ecstasy: {
					DEFAULT: '#F57C21',
					50: '#FDE4D1',
					100: '#FCD8BD',
					200: '#FAC196',
					300: '#F9AA6F',
					400: '#F79348',
					500: '#F57C21',
					600: '#D4610A',
					700: '#9F4807',
					800: '#693005',
					900: '#331702',
					950: '#180B01'
				},
				'deep-oak': {
					DEFAULT: '#4C2A11',
					50: '#D47F40',
					100: '#D17430',
					200: '#B06127',
					300: '#8F4F20',
					400: '#6D3C18',
					500: '#4C2A11',
					600: '#1E1107',
					700: '#000000',
					800: '#000000',
					900: '#000000',
					950: '#000000'
				}
			}
		}
	},
	plugins: []
};
