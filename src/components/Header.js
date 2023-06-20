import React from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import background from '../images/background.jpg'
import sun from '../images/sun.svg'
import { createTodo } from "../actions/todoAction";
import {useSelector} from 'react-redux';


function Header() {
   
    const {filtered} = useSelector((state) => state.todos)

    const dispatch = useDispatch()

    function handleAddItem(e) {
        e.preventDefault();
        const isEmpty = str => !str.trim().length;
        const inputValue = document.querySelector('input').value;
        if(isEmpty(inputValue)) {
            alert("Input is empty. Please add a short description for your todo item!")
        }else {
            const item = ({"text": inputValue, "state": "active"})
                    dispatch(createTodo(item))
                    document.querySelector('input').value = "";
        }
    }
    
    return (
        <ContainerStyled>

            <HeadStyled>
                <TitleStyled>TODO</TitleStyled>
                <img src={sun} alt="theme-icon" />
            </HeadStyled>

            <InputContainerStyled>
                <CircleStyled />
                <form onSubmit={handleAddItem}>
                    <InputStyled type="text" placeholder="Create a new todo..."/>
                </form>
            </InputContainerStyled>
        </ContainerStyled>
    )
}

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${background});
    background-size: cover;
    padding: 5rem 0.75rem;
`

const HeadStyled = styled.div`
    display: flex;
    width: 450px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    img {
        height: 25px;
    }
`

const TitleStyled = styled.h1`
    color: white;
    letter-spacing: 0.5rem;
    line-height: 3rem;
    
`

const InputContainerStyled = styled.div`
    display: flex;
    /* justify-content: left; */
    align-items: center;
    padding: 0.25rem 1rem;
    background: #26273c;
    border-radius: 0.75rem;
    width: 450px;
    margin: 0 auto;
    form {
        width: 100%;
    }
`

const CircleStyled = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #40425a;
    margin-right: 0.5rem;
`

const InputStyled = styled.input`
    border: none;
    background-color: inherit;
    padding: 1rem;
    color: #68697f;
    width: 100%;
    outline: none;
    font-size: 1rem;
`

export default Header
