import { findIndex } from 'lodash';

const defaultState = { todos: [] };

let index = 0;

export default function results (state = defaultState, action) {
	switch (action.type) {
	case 'ADD_TODO':
		return {
			...state,
			todos: [
				...state.todos,
				{
					completed: false,
					created: Date.now(),
					id: Date.now(),
                    isDone: false,
					listID: action.value.listID,
					text: action.value.text,
					updated: Date.now()
				}
			]
		};
	case 'UPDATE_TODO':
		index = findIndex(state.todos, (list) => list.id === action.value.id);

		return {
			...state,
			todos: [
				...state.todos.slice(0, index),
				{
					...state.todos[index],
					...action.value
				},
				...state.todos.slice(index + 1)
			]
		};
	case 'DELETE_TODO':
		index = findIndex(state.todos, (list) => list.id === action.value.id);

		return {
			...state,
			todos: [
				...state.todos.slice(0, index),
				...state.todos.slice(index + 1)
			]
		};
    case 'TOGGLE_TODO_DONE':
        index = findIndex(state.todos, (list) => list.id === action.value.id)
        return {
            ...state,
            todos: [
                ...state.todos.slice(0, index),
                {
                    ...state.todos[index],
                    isDone: ! state.todos[index].isDone,
                }
            ]
        }
	default:
		return state;
	}
}
