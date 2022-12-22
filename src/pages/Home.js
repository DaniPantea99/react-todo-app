import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import {useDispatch} from 'react-redux';
import {loadTodo} from '../actions/todoAction'
import TodoList from '../components/TodoList';
import styled from 'styled-components';

function Home() {
   

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTodo())
    }, [dispatch])

    return (
        <div>
            <Header />
            <TodoList />
        </div>
    )
}

export default Home