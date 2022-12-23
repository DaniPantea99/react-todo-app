const initState = {
  all: [],
  filtered: [],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_TODO':
      return {
        ...state,
        all: action.payload.all,
        filtered: action.payload.all,
      };
    case 'CREATE_TODO':
      return {
        ...state,
        all: [...state.all, action.payload.item],
      };
    case 'FILTER_TODO':
      return {
        ...state,
        filtered: [
          ...state.all.filter((item) =>
            action.payload.state ? item.state === action.payload.state : true
          ),
        ],
      };
    case "UPDATE_TODO_ITEM":
        const {item} = action.payload
        const index = state.all.findIndex(f => f.id === item.id)
        const todoList = state.all.slice()
        if(index > -1) {
            todoList[index] = item
        }
        return {
            ...state,
            all: todoList
        }
    case "REMOVE_ITEM":
        return {
            ...state,
            all: [...state.all, action.payload.item],
        }
    default:
      return { ...state };
  }
};

export default todoReducer;
