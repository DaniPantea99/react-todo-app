import React from "react";
import styled from "styled-components";
import TodoItem from './TodoItem'
import TodoListFooter from './TodoListFooter'



function TodoList({all, active, completed}) {

    function showAll() {
        return (
            all.map((item, index) => <TodoItem key={index} input={item} />)
        )
    }

    function showActive() {
        return (
            active.map((item, index) => <TodoItem key={index} input={item} />)

        )
    }

    function showCompleted() {
        return (
            completed.map((item, index) => <TodoItem key={index} input={item} />)
        )
    }

    return (
        <ListContainer>
            <TodosContainer className="todocontainer">
                {showAll()}
                {/* {showActive()} */}
                {/* {showCompleted()} */}

            </TodosContainer>
            {all.length !== 0 &&
                <TodoListFooter all={all} active={active} completed={completed} showActive={showActive()}/>
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