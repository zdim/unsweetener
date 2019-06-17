import React from "react";
import styled from "styled-components";

const Header = props => {
    const HeaderBar = styled.header`
        flex: 0 1 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-around;
        align-items: center;
        background-color: #111111;
        color: #fff;
        padding: 20px 10px;
        border-bottom: darkgrey 1px solid;
    `

    return (
        <HeaderBar>
            {props.children}
        </HeaderBar>
    )
}

export default Header;