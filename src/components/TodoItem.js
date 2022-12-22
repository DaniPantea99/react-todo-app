import React, {useState, useEffect} from "react";
import styled from "styled-components";
import checked from '../images/check.svg'
import urlurl from "../api";
import axios from "axios";
import {useSelector} from 'react-redux';


function TodoItem({item}) {
    const {filtered} = useSelector((state) => state.todos)

    const [state, setState] = useState(item.state)
        function handleItem() {
            if(state === "active") {
                setState("done")
                axios.put(`${urlurl}/${item.id}`, {"text": `${item.text}`, "state": "done", "id": `${item.id}`})
            } else {
                setState("active")
                axios.put(`${urlurl}/${item.id}`, {"text": `${item.text}`, "state": "active", "id": `${item.id}`})
            }
        }

        // const counterActiveTodos = filtered.filter((item) => item.state === "active").length
        // const [counter, setCounter] = useState(counterActiveTodos)
    
        // useEffect(() => {
        //     console.log("use effect has run")
        //     setCounter(counterActiveTodos)
        // }, [state])

    return (
        <ItemStyled onClick={handleItem}>
            <InputStyled className="checkbox" type="checkbox" value={state} />
            <TextStyled value={state}>
                {item.text}
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
    cursor: pointer;
    &:hover {
        filter: brightness(110%)
    }
`

const InputStyled = styled.input`
    /* pointer-events: none; */
    cursor: pointer;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #40425a;
    margin-right: 0.5rem;

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
    width: 100%;
    font-size: 1rem;
    text-transform: capitalize;
    &[value="done"] {
        color: #68697f;
        text-decoration: line-through;
    }
`

export default TodoItem