import React from 'react';
import styled from "styled-components";

const BackToSearch = ( {history} ) => {

    const BackButton = styled.button`
        border: none;
        background-color: inherit;
        font-size: .5em;
        cursor: pointer;
        display: inline-block;
        color: #75a2c2;  
        &:hover { color: #fff; }
    `

    return (
        <div>
            <BackButton
                onClick={history.goBack}>
                &lt; back to search results &lt;
            </BackButton>
        </div>
    )
}

export default BackToSearch;