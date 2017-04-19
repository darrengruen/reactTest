import { addTodo, deleteTodo, toggleTodoDone } from './../actions';
import React from 'react';
import { connect } from 'react-redux';

class Todo extends React.Component {
	saveAttributes (event) {
		event.preventDefault();
		this.props.saveAttributes();
	}
	deleteTodo (event) {
		event.preventDefault();
		this.props.deleteTodo(this.props.id);
	}
    toggleTodoDone (event) {
        event.preventDefault();
        this.props.toggleTodoDone({
            listID: this.props.listID,
            id: this.props.id
        });
    }
	updateTodo (event) {
		if (event.key === "Enter") {
			event.preventDefault();
			this.props.addTodo({
				listID: this.props.id,
				text: event.target.value
			});
		}
	}
	render () {
		return (
			<li className="list-group-item px-sm-2 py-sm-1">
				{this.props.text} <input type="checkbox" onChange={ this.toggleTodoDone.bind(this)} value={ this.props.isDone ? "checked" : "" }></input>
			</li>
		);
	}
}

const mapStateToProps = (state) => state.todos;

const mapDispatchToProps = {
	addTodo,
	deleteTodo,
    toggleTodoDone,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
