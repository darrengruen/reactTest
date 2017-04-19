export const addList = (value) => ({
	type: 'ADD_LIST',
	value
});

export const updateList = (value) => ({
	type: 'UPDATE_LIST',
	value
});

export const deleteList = (value) => ({
	type: 'DELETE_LIST',
	value
});


export const addTodo = (value) => ({
	type: 'ADD_TODO',
	value
});

export const updateTodo = (value) => ({
	type: 'UPDATE_TODO',
	value
});

export const deleteTodo = (value) => ({
	type: 'DELETE_TODO',
	value
});

export const toggleTodoDone = (value) => ({
    type: 'TOGGLE_TODO_DONE',
    value
})
