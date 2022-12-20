import axios from "axios";
import urlurl from '../api.js'

const loadTodo = () => async (dispatch) => {
    const allTodos = await axios.get(urlurl);

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

const createTodo = (item) => async (dispatch) => {
    const createdItem = await axios.post(urlurl, item);

    dispatch({
        type: "CREATE_TODO",
        payload: {
            item: createdItem.data,
        }
    })
}

// const removeTodos = (items) => async (dispatch) => {
//     const removeItems = items.filter(item => item.id === "1")

//     dispatch({
//         type: "REMOVE_TODO",
//         payload: {
//             item: removeItems.data,
//         }
//     })
// }

export {loadTodo, createTodo}