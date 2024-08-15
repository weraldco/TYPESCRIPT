import { Provider } from 'react-redux';
import GlobalProvider from './components/context';
import Login from './components/Login';
import User from './components/Person';
import { store } from './redux/store';
function App() {
	return (
		<>
			<Provider store={store}>
				{/* <User name="Werald" age={34} isMarried /> */}
				<Login />
			</Provider>
		</>
	);
}

export default App;
