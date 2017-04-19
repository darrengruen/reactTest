import React from 'react';
import { addList } from './../actions';
import { connect } from 'react-redux';

class Modal extends React.Component {
	constructor (props) {
		super(props);
		this.state = { listName: '' };
	}
	updateName (event) {
		this.setState({ listName: event.target.value });
	}
	addList (event) {
		event.preventDefault();
		this.props.addList(this.state.listName);
		this.setState({ listName: '' });
	}
	render () {
		return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				<button className="navbar-toggler navbar-toggler-right" data-target="#navbar" data-toggle="collapse" type="button">
					<span className="navbar-toggler-icon" />
				</button>
				<a className="navbar-brand">React Test</a>
				<div className="collapse navbar-collapse" id="navbar">
					<ul className="navbar-nav mr-auto mt-2 mt-md-0">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home</a>
						</li>
					</ul>
					<form className="form-inline" onSubmit={this.addList.bind(this)}>
						<input
							className="form-control mr-sm-2"
							onChange={this.updateName.bind(this)}
							placeholder="Add List (Name)"
							type="text"
							value={this.state.listName}
						/>
					</form>
				</div>
			</nav>
		);
	}
}

const mapDispatchToProps = {
	addList
};

export default connect(null, mapDispatchToProps)(Modal);