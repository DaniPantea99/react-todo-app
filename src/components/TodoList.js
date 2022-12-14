import React from "react";
import styled from "styled-components";
import TodoItem from './TodoItem'
import TodoListFooter from './TodoListFooter'
import todoList from "../database";


function TodoList() {

    return (
        <ListContainer>
            {todoList.map((item, index) => <TodoItem key={index} inputText={item.text} />)}
            <TodoListFooter />
        </ListContainer>
    )
}

const ListContainer = styled.div`
    position: absolute;
    top: 260px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    border-radius: 0.75rem;
    overflow: hidden;
    width: 450px;
    margin: 0 auto;

`
export default TodoList