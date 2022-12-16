import axios from "axios";
import {allTodosAddress} from '../database'

const loadTodo = () => async (dispatch) => {
    const allTodos = await axios.get(allTodosAddress);

    // const active = allTodos.filter(item)
    // const completed = allTodos.filter(item)

    dispatch({
        type: "FETCH_TODO",
        payload: {
            all: allTodos.data,
            // active: activeTodos.data,
            // completed: completedTodos.data,
        }
    })
}

export default loadTodo