import { Signal } from 'signal-polyfill';

function Counter() {
	const count = new Signal.State(0);

	function increment() {
		count.set(count.get() + 1);
	}

	return (
		<button onClick={increment}>Count: {() => count.get()}</button>
	);
}

function App() {
	return (
		<>
			<h1>JSX test app</h1>
			<Counter></Counter>
		</>
	);
}

export default App;
