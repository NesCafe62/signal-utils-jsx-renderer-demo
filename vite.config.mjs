import { defineConfig } from 'vite';
import jsxPlugin from 'signal-utils-jsx-renderer/vite-plugin-jsx';

export default defineConfig({
	plugins: [jsxPlugin()],
	server: {
		port: 3000,
	},
	build: {
		modulePreload: { polyfill: false },
	},
});