import Header from './components/ui/Header';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from './components/ui/Theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div className="App" color="secondary">
					<Header />
          <Switch>
            <Route exact path="/" component={() => {
              return <div>Hello</div>
            }} />
            <Route path="/services" component={() => {
              return <div>Services</div>
            }} />
            <Route path="/customsoftware" component={() => {
              return <div>customsoftware</div>
            }} />
            <Route path="/mobileapps" component={() => {
              return <div>mobileapps</div>
            }} />
            <Route path="/websites" component={() => {
              return <div>Hello</div>
            }} />
            <Route path="/revolution" component={() => {
              return <div>The Revolution</div>
            }} />
            <Route path="/about" component={() => {
              return <div>About</div>
            }} />
            <Route path="/contact" component={() => {
              return <div>Contact Us</div>
            }} />
            <Route path="/estimate" component={() => {
              return <div>Estimate</div>
            }} />
          </Switch>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
