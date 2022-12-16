import React from "react";
import styled from 'styled-components';
import todoList from "../database";
import background from '../images/background.jpg'
import sun from '../images/sun.svg'
import TodoList from '../components/TodoList';



function Header() {
   
    function handleAddItem(e) {
        e.preventDefault();
        const newInput = document.querySelector('input');
        const value = newInput.value;
        todoList.push({"text": value, "isComplete": false})
        newInput.value = "";
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

            <TodoList todo={todoList} />

        </ContainerStyled>
    )
}

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    /* position: relative; */
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
    justify-content: left;
    align-items: center;
    padding: 0.25rem 1rem;
    background: #26273c;
    border-radius: 0.75rem;
    width: 450px;
    margin: 0 auto;
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
