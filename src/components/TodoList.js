import React from "react";
import styled from "styled-components";
import TodoItem from './TodoItem'
import TodoListFooter from './TodoListFooter'
import {useSelector} from 'react-redux';


function TodoList() {

    const {all, filtered} = useSelector((state) => state.todos)

    return (
        <ListContainer>

            <TodosContainer>
                {filtered.map((item, index) => <TodoItem key={index} item={item} />)}
            </TodosContainer>
            
            {all.length !== 0 &&
                <TodoListFooter />
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

const TodosContainer = styled.div`
    max-height: 50vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`

export default TodoList