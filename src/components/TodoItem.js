import React from "react";
import styled from "styled-components";

function TodoItem({inputText}) {
    return (
        <ItemStyled>
            <CircleStyled />
            <TextStyled>
                {inputText}
            </TextStyled>
        </ItemStyled>
    )
}

const ItemStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 1rem;
    background: #26273c;
    border-bottom: 1px solid #38394e;
    width: 100%;
    cursor: default;
`

const CircleStyled = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #40425a;
    margin-right: 0.5rem;
`

const TextStyled = styled.span`
    padding: 1rem;
    color: #c2c3dc;
    width: 100%;
    font-size: 1rem;
`

export default TodoItem