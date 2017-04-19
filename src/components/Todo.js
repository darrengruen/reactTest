import { addTodo, deleteTodo, toggleTodoDone } from './../actions';
import React from 'react';
import { connect } from 'react-redux';

const todo = props => <li className="list-group-item px-sm-2 py-sm-1">
    <button type="button" className="btn-link btn-sm float-right" onClick={ e => props.toggleTodoDone(props.listID, props.id) }>
	{ props.isCompleted ? 'O' : 'X' }
    </button> 
    { 
	props.isCompleted ? 
	    <del>{ props.text }</del> :
	    props.text    
    }
</li>

const mapStateToProps = state => ({
    listID: state.listID,
})

const mapDispatchToProps = dispatch => ({
    addTodo: (listID, text)=> dispatch(addTodo({ value: text, listID })),
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodoDone: (listID, id) => dispatch(toggleTodoDone({ listID, id })),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(todo);
