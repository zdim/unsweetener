import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import HeaderSearchBar from "./HeaderSearchBar";

const HeaderSearch = ({showSearchResults}) => {
    const HeaderBar = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 20px;
    `

    return (
        <HeaderBar>
            <Icon name="search-icon" color="#FFFFFF" size={16} />
            <HeaderSearchBar showSearchResults={showSearchResults} />
        </HeaderBar>
    )
}

export default HeaderSearch;