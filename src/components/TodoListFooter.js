import React from "react";
import styled from "styled-components";
// import { useDispatch } from "react-redux";
// import {removeTodos} from '../actions/todoAction'

function TodoListFooter({all, active, completed, showActive}) {

    const counter = all.length

    // const dispatch = useDispatch()

    // function handleClear() {
    //     dispatch(removeTodos(all))
    //     console.log(all)
    // }

    // function handleShowActive() {
    //     const a = document.querySelector('.todocontainer')
    //     console.log(a)
    //     a.append(showActive)
    // }

    return (
        <FooterStyled>
            <p>{counter} Items Left</p>
            
            <FiltersStyled>
                <BtnFilterStyled>All</BtnFilterStyled>
                <BtnFilterStyled>Active</BtnFilterStyled>
                <BtnFilterStyled>Completed</BtnFilterStyled>
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