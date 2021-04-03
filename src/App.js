import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import Fade from 'react-reveal/Fade';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
	return (
		<Router>
			<div className="App">
				<GlobalStyles />
				<Fade top duration={1000} distance="40px">
					<Route exact path="/">
						<div className="container">
							<Header />
						</div>
						<Hero />
					</Route>
				</Fade>
			</div>
		</Router>
	);
};

export default App;
