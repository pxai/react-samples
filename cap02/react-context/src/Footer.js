import React from 'react';
import { OurContext } from './OurContext';

class Footer extends React.Component {
	render () {
		return (
			<footer>
				<small>This is the footer {this.context.title}</small>
			</footer>
		);
	}
}

Footer.contextType = OurContext;
export default Footer;