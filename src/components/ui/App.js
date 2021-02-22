import React from 'react';
import Header from '../ui/Header';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import theme from './Theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header />
				<Switch>
					<Route
						exact
						path="/"
						component={() => <>Home Page</>}
					/>
					<Route
						exact
						path="/services"
						component={() => <>Services Page</>}
					/>
					<Route
						exact
						path="/customsoftware"
						component={() => <>Custom Software Page</>}
					/>
					<Route
						exact
						path="/mobileapps"
						component={() => <>Mobile Apps Page</>}
					/>
					<Route
						exact
						path="/websites"
						component={() => <>Websites Page</>}
					/>
					<Route
						exact
						path="/revolution"
						component={() => <>Revolution Page</>}
					/>
					<Route
						exact
						path="/about"
						component={() => <>About Us</>}
					/>
					<Route
						exact
						path="/contact"
						component={() => <>Contact Us</>}
					/>
					<Route
						exact
						path="/estimate"
						component={() => <>Estimate Page</>}
					/>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
