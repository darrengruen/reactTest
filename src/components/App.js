import Content from './Content';
import Nav from './Nav';
import React from 'react';

export default class App extends React.Component {
	render () {
		return (
			<div>
				<Nav />
				<Content />
			</div>
		);
	}
}
