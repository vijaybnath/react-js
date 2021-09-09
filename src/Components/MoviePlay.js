import { ArrowBackSharp, Settings, Subtitles } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MoviePlay = () => {
    return (
        <Container>
            <Buttons>
                <Link to="/detail">
                    <ArrowBackSharp />
                </Link>
                <Settings className="settings" />
                <Subtitles className="subtitles" />
            </Buttons>
        </Container>
    );
}

const Container = styled.div `
    display: grid;
    margin-top: 60px;
    padding: 40px;
`;

const Buttons = styled.div `
    display: flex;

    > .settings {
        margin-left: 80%;
        font-size: 25px !important;
    }

    > .settings:hover {
        font-size: 30px !important;
        cursor: pointer;
    }

    > .subtitles {
        margin-left: 4%;
        font-size: 25px !important;

    }

    > .subtitles:hover {
        font-size: 30px !important;
        cursor: pointer;

    }
`;

export default MoviePlay;
