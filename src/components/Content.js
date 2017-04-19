import React from 'react';
import List from './List'
import { connect } from 'react-redux';

class Content extends React.Component {
	saveAttributes (event) {
		event.preventDefault();
		this.props.saveAttributes();
	}
	render () {
		return (
			<div className="container-fluid">
				<div className="row mt-2">
					{this.props.lists.map((list) => <List key={list.id} {...list} />)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => state.lists;

export default connect(mapStateToProps, null)(Content);
