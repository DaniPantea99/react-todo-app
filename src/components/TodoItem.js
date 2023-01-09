import React from "react";
import styled from "styled-components";
import checked from '../images/check.svg'
import {useDispatch} from 'react-redux';
import {updateItem, removeTodoItem} from '../actions/todoAction'



function TodoItem({item}) {

    const dispatch = useDispatch();

        function toggleState() {
            const {state} = item
            if(state === "active") {
                dispatch(updateItem({...item, state: "done"}))
            } else {
                dispatch(updateItem({...item, state: "active"}))
            }
        }

        function handleRemoveItem(e) {
            e.stopPropagation()
            dispatch(removeTodoItem(item))
            console.log("from TodoItem:", item)
        }
            
    return (
        <ItemStyled onClick={toggleState}>
            <InputStyled className="checkbox" type="checkbox" value={item.state} />
            <TextStyled value={item.state}>
                {item.text}
            </TextStyled>
            {item.state === "done" &&
            <BtnStyled onClick={handleRemoveItem}>X</BtnStyled>
            }
        </ItemStyled>
    )
}

const ItemStyled = styled.div`
    position: relative;
    display: flex;
    justify-content:left;
    align-items: center;
    padding: 0.25rem 0.25rem 0.25rem 1rem;
    background: #26273c;
    border-bottom: 1px solid #38394e;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1;
    &:hover {
        filter: brightness(110%)
    }
`

const InputStyled = styled.input`
    /* pointer-events: none; */
    cursor: pointer;
    appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid #40425a;
    margin-right: 0.5rem;
    transition: all 0.3s ease;
    &:hover {
        background: #40425a;
        border: 1px solid #8187bc;

    } 
    &[value="done"] {
        border: none;
        background: url(${checked}) 0px center no-repeat;
    }
`

const TextStyled = styled.span`
    pointer-events: none;
    padding: 1rem;
    color: #c2c3dc;
    width: 80%;
    font-size: 1rem;
    text-transform: capitalize;
    &[value="done"] {
        color: #68697f;
        text-decoration: line-through;
    }
`

const BtnStyled = styled.button`
    
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    cursor: pointer;
    border: none;
    box-shadow: 0px 0px 1px 0px gray;
    border-radius: 10px;
    background: inherit;
    color: white;
    padding: 0.75rem 0.75rem;
    transition: all 0.3s ease;
    text-transform: uppercase;
    z-index: 2;
    font-size: 1rem;
    &:hover {
        color: red;
        background: #f9caca;
    }
`

export default TodoItem