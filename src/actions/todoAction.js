import axios from "axios";
import urlurl from '../api.js'

const loadTodo = () => async (dispatch) => {
    const allTodos = await axios.get(urlurl);

    dispatch({
        type: "FETCH_TODO",
        payload: {
            all: allTodos.data,
        }
    })
}

const updateItem = (item) => async (dispatch) => {
    const updatedItem = await axios.put(`${urlurl}/${item.id}`, item)
    dispatch({
        type: "UPDATE_TODO_ITEM",
        payload: {
            item: updatedItem.data
        }
    })
    dispatch({
        type: "FILTER_TODO",
        payload: {
            state: ""
        }
    })
}

const loadFilterTodo = (state) => async (dispatch) => {

    dispatch({
        type: "FILTER_TODO",
        payload: {
            state
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
    dispatch({
        type: "FILTER_TODO",
        payload: {
            state: ""
        }
    })
}

const removeTodoItem = (item) => async (dispatch) => {
    const all = await axios.get(urlurl);
    const index = all.data.indexOf(item)
    const removeItem = all.data.splice(index, 1)
    // console.log(removeItem)
    dispatch({
        type: "REMOVE_ITEM",
        payload: {
            item: removeItem,
        }
    })
    dispatch({
        type: "FILTER_TODO",
        payload: {
            state: ""
        }
    })
}

export {loadTodo, createTodo, loadFilterTodo, updateItem, removeTodoItem}