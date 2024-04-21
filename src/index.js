/* @refresh reload */
import { render } from 'signal-utils-jsx-renderer/renderer/dom/hyperscript';
import App from './App';

const root = document.getElementById('app');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error('#app element not found');
}

render(App, root);