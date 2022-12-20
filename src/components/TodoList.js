import React from "react";
import styled from "styled-components";
import TodoItem from './TodoItem'
import TodoListFooter from './TodoListFooter'


function TodoList({all}) {

    return (
        <ListContainer>
            {all.map((item, index) => <TodoItem key={index} input={item} />)}
            {all.length !== 0 &&
            <TodoListFooter all={all} />
            }
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