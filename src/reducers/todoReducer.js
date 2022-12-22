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
    // case "REMOVE_TODO":
    //     return {

    //         items: action.payload.item
    //     }
    default:
      return { ...state };
  }
};

export default todoReducer;
