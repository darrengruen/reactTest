import { addTodo, deleteList, updateList } from './../actions';
import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

class List extends React.Component {
	constructor (props) {
		super(props);
		this.state = { edit: false };
	}
	editList () {
		this.setState({ edit: !this.state.edit });
	}
	updateName (event) {
		this.props.updateList({
			id: this.props.id,
			name: event.target.value
		});
	}
	keyUp (event) {
		if (event.key === "Enter") {
			this.setState({ edit: !this.state.edit });
		}
	}
	deleteList (event) {
		event.preventDefault();
		this.props.deleteList(this.props.id);
	}
	addTodo (event) {
		if (event.key === "Enter") {
			event.preventDefault();
			this.props.addTodo({
				listID: this.props.id,
				text: event.target.value
			});
			event.target.value = '';
		}
	}
    toggleTodoDone (event) {
        event.preventDefault();
        console.log(event);
        this.props.toggleTodoDone({
            listID: this.props.id,
        });
    }
	render () {
		const todos = this.props.todos.filter((todo) => todo.listID === this.props.id);

		return (
			<div className="col-sm-4 col-md-3 col-lg-2">
				<div className="card mb-md-4">
					<h5 className="card-header">
						{this.state.edit ? (
							<input
								className="form-control"
								onChange={this.updateName.bind(this)}
								onKeyUp={this.keyUp.bind(this)}
								placeholder="List Name"
								type="text"
								value={this.props.name}
							/>
						) : (
							<span onClick={this.editList.bind(this)}>{this.props.name}</span>
						)}
					</h5>
					<div className="card-block p-sm-0">
						<ul className="list-group list-group-flush">
							{todos.map((todo) => <Todo key={todo.id} {...todo} />)}
							<li className="list-group-item px-sm-2 py-sm-1">
								<input
									className="form-control"
									onKeyUp={this.addTodo.bind(this)}
									placeholder="New Todo"
									type="text"
								/>
							</li>
						</ul>
					</div>
					<div className="card-footer text-muted text-right px-sm-2 py-sm-1">
						<a className="card-link" href="#" onClick={this.deleteList.bind(this)}>Delete List</a>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => state.todos;

const mapDispatchToProps = {
	addTodo,
	deleteList,
	updateList
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
