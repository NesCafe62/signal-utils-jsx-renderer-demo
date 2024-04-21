import { defineConfig } from 'vite';
import jsxPlugin from 'signal-utils-jsx-renderer/vite-plugin-jsx';
import { resolve } from 'path'

export default defineConfig({
	plugins: [jsxPlugin()],
	server: {
		port: 3000,
	},
	/* optimizeDeps: {
		include: ['signal-utils'],
	}, */
	build: {
		modulePreload: { polyfill: false },
		/* rollupOptions: {
			input: {
				'signal-utils': './node_modules/signal-utils/src/index.ts',
				'index.html': './index.html',
			}
		} */
		/* commonjsOptions: {
			include: [/signal-utils/, /node_modules/],
		}, */
	},
	resolve: {
		alias: {
			'signal-utils/subtle/microtask-effect': './node_modules/signal-utils/src/subtle/microtask-effect.ts',
		},
	}
	/* resolve: {
		alias: {
			'signal-utils/subtle/microtask-effect': './dist/assets/signal-utils-DBmdGFxc.js',
		},
	} */
});