import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/pdf/12otozn0bz': 'https://constancias.umbrellaservices.angellos.net'
		}
	},
	ssr: {
		external: ['file-saver']
	}
});
