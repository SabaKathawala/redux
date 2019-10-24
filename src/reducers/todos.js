const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );

        case 'DELETE_TODO':
            const deleteIndex = state.findIndex(obj => obj.id === action.id);
            const newState = [...state];
            console.log(newState.splice(deleteIndex, 1));
            return newState;
        default:
            return state
    }
};

export default todos