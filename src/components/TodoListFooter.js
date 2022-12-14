import React from "react";
import styled from "styled-components";

function TodoListFooter() {
    return (
        <FooterStyled>
            <p>5 Items Left</p>
            
            <FiltersStyled>
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </FiltersStyled>

            <p>Clear Completed</p>
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #26273c;
    color: #5e5e77;
    font-size: 0.75rem;
    cursor: default;
`

const FiltersStyled = styled.div`
    display: flex;
    gap: 10px;
`

export default TodoListFooter