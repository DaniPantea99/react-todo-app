import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {loadFilterTodo} from '../actions/todoAction'
import {useSelector} from 'react-redux';


function TodoListFooter() {

    const {filtered} = useSelector((state) => state.todos)

    const dispatch = useDispatch()

    function handleFilter(state) {
        dispatch(loadFilterTodo(state))
    }

  


    return (
        <FooterStyled>
            <p>0 Items Left</p>
            
            <FiltersStyled>
                <BtnFilterStyled onClick={() => handleFilter()}>All</BtnFilterStyled>
                <BtnFilterStyled onClick={() => handleFilter("active")}>Active</BtnFilterStyled>
                <BtnFilterStyled onClick={() => handleFilter("done")}>Completed</BtnFilterStyled>
            </FiltersStyled>

            <BtnStyled>Clear Completed</BtnStyled>
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.75rem;
    background: #26273c;
    color: #5e5e77;
    font-size: 0.75rem;
    cursor: default;
`

const FiltersStyled = styled.div`
    display: flex;
    gap: 3px;
`
const BtnStyled = styled.button`
    background: none;
	color: inherit;
	border: none;
	padding: 4px 7px;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    letter-spacing: 1px;

    &:hover {
        filter: brightness(150%);
    }
    &:active {
        color: #5271dc;
    }
`

const BtnFilterStyled = styled(BtnStyled)`
    &:focus {
        color: #5271dc;
        text-decoration: underline;
    }
` 

export default TodoListFooter