//Декларативный
import logo from './logo.svg';
import './index.css';
import './App.css';

//Императивный
export const App = () => {
	const year = new Date().getFullYear();

	return (
// Декларативный
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo'/>
				<p>
					Edit <code>src/App.jsx</code> and save to reload.
				</p>
				<a
				className='App-link'
				href='https://reactjs.org'
				target='_blank'
				rel='noopener noreferrer'
				>
					Learn React
				</a>
				<div>{year}</div>

			</header>

		</div>
	);


}
