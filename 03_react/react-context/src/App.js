import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { OurContext, defaultValues } from './OurContext';

class App extends React.Component {
	render () {
		return (
			<div className="App">
				<OurContext.Provider value={defaultValues}>
					<Header/>
					<div>This is just content</div>
					<Footer/>
				</OurContext.Provider>
			</div>
		);
	}
}

export default App;
