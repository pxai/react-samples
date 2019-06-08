import React from 'react';

class Paragraphs extends React.Component {
	render () {
		return (
			<React.Fragment>
				{this.props.phrases.map (phrase =>
					<p>{phrase}</p>
				)}
			</React.Fragment>
		);
	}
}

export default Paragraphs;