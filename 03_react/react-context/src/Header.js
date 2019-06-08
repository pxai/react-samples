import React from 'react';
import { OurContext } from './OurContext';


class Header extends React.Component {
	render () {
		return (
			<header style={{color: this.context.color}}>
				<h1>This is header</h1>
				<h2>{this.context.title}</h2>
			</header>
		);
	}
}

Header.contextType = OurContext;
export default Header;