import styled from "styled-components";
import React from "react";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Orginals from "./Orginals";
import Trending from "./Trending";
import { SearchRounded } from "@material-ui/icons";

const Search = () => {
    return (
        <Container>
            <SearchContainer>
                <SearchRounded />
                <input placeholder="Search" />
                <button>Search</button>
            </SearchContainer>
            <Viewers />
            <Recommends />
            <NewDisney />
            <Orginals />
            <Trending />
        </Container>
    );
}

const Container = styled.div `
    display: grid;
    margin-top: 70px;
    padding: 30px;
    min-height: 170px;
    color: white;
`;

const SearchContainer = styled.div `
    background-color: white;
    height: 40px;
    width: 50%;
    border-radius: 20px;
    align-items: center;
    display: flex;
    padding: 10px;

    > input {
        border-radius: 20px;
        height: 100%;
        width: 100%;
        text-align: center;
        outline: 0;
        font-size: 20px;
        border: none;
    }

    > button {
        display: none;
    }

    > .MuiSvgIcon-root {
        color: black;
    }
`;

export default Search;

