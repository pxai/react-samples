import React from 'react';
import './App.css';
import Paragraphs from './Paragraphs';

const phrases = ["Code must read like well-written prose",
	"If you need to use comments you should consider refactoring",
	"Test early, and test often"];

class App extends React.Component {
	render () {
		return (
			<div className="App">
				<header className="App-header">
					React Fragments Sample
					<Paragraphs phrases={phrases}/>
				</header>
			</div>
		);
	}
}

export default App;
