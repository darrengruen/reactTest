import React from 'react';
import { addList } from './../actions';
import { connect } from 'react-redux';

const modal = props => <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
	{/* The button could be moved to its own component alse */}
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
			<div className="form-inline">
				<input
					className="form-control mr-sm-2"
					onKeyUp={ e => e.key === 'Enter' ? (props.addList(e.target.value), e.target.value = "") : null  }
					placeholder="Add List (Name)"
					type="text"
					value={props.listName}
				/>
			</div>
	</div>
</nav>

const mapDispatchToProps = dispatch => ({
	addList: listName => dispatch(addList(listName))
});

const mapStateToProps = state => ({ listName: state.listName })

export default connect(mapStateToProps, mapDispatchToProps)(modal);
