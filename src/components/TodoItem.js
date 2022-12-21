import React, {useEffect, useState} from "react";
import styled from "styled-components";
import checked from '../images/check.svg'
import urlurl from "../api";
import axios from "axios";

function TodoItem({input}) {

    const [active, setActive] = useState(false)

        function handleItem() {
            if(active !== true) {
                setActive(true)
                axios.put(`${urlurl}/${input.id}`, {"text": `${input.text}`, "isComplete": true, "id": `${input.id}`})
            } else {
                setActive(false)
                axios.put(`${urlurl}/${input.id}`, {"text": `${input.text}`, "isComplete": false, "id": `${input.id}`})
            }
        }


    return (
        <ItemStyled onClick={handleItem}>
            <InputStyled className="checkbox" type="checkbox" value={active} />
            <TextStyled value={active}>
                {input.text}
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
    
    &[value="true"] {
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
    &[value="true"] {
        color: #68697f;
        text-decoration: line-through;
    }
`

export default TodoItem