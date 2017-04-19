import { findIndex } from 'lodash';

const defaultState = { lists: [] };

let index = 0;

export default function results (state = defaultState, action) {
	switch (action.type) {
	case 'ADD_LIST':
		return {
			...state,
			lists: [
				...state.lists,
				{
					created: Date.now(),
					id: Date.now(),
					isEditing: false,
					name: action.value,
					updated: Date.now()
				}
			]
		};
	case 'UPDATE_LIST':
		index = findIndex(state.lists, (list) => list.id === action.value.id);

		return {
			...state,
			lists: [
				...state.lists.slice(0, index),
				{
					...state.lists[index],
					...action.value
				},
				...state.lists.slice(index + 1)
			]
		};
	case 'DELETE_LIST':
		index = findIndex(state.lists, (list) => list.id === action.value);

		return {
			...state,
			lists: [
				...state.lists.slice(0, index),
				...state.lists.slice(index + 1)
			]
		};
	default:
		return state;
	}
}
