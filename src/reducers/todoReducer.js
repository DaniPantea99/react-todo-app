const initState = {
    all: [],
    active: [],
    completed: [],
}

const todoReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_TODO":
            return {
                ...state,
                all: action.payload.all,
                active: action.payload.active,
                completed: action.payload.completed,
            };
        default:
            return {...state};
    }
}

export default todoReducer;