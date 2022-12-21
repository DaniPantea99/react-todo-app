import React, { useEffect } from 'react';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {loadTodo} from '../actions/todoAction'
import TodoList from '../components/TodoList';
import styled from 'styled-components';

function Home() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTodo())
    }, [dispatch])

    const {all, active, completed} = useSelector((state) => state.todos)

    return (
        <div>
            <Header />
            <TodoList all={all} active={active} completed={completed}/>
        </div>
    )
}

export default Home