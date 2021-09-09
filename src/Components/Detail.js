import { Close, Group } from "@material-ui/icons";
import styled from "styled-components";
import React from 'react';
import { Link } from "react-router-dom";

function Detail() {
    return (
        <Container>
            <Link to="/home">
                <Close />
            </Link>
            <Background>
                <img 
                    alt=""
                    src="/Images/movie.jpg"
                />
            </Background>
            <ImageTitle>
                <h1>Coco</h1>
            </ImageTitle>
            <ContentMedia>
                 <Controls>
                    <Link to="/movie">
                        <Player>
                            <img alt="" src="/Images/play button.png" />
                            <span>Play</span>
                        </Player>
                    </Link>
                    <Trailer>
                        <img alt="" src="/Images/play button white.png" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                             <Group />
                        </div>
                    </GroupWatch>
                </Controls>
                <Subtitle>
                    2020, 1h 49m, Fantasy, Family, Comedy, Animation, Music 
                    <Description>
                        Coco likes music.
                        But His Family dosen't.His Father was the greatest Musician Of all. 
                        So he went to the other world of people who have died and to get his Father's blessing.
                        There he met with a friend. 
                    </Description>
                </Subtitle>
            </ContentMedia>
        </Container>
    )
}


const Container = styled.div `
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div `
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

const ImageTitle = styled.div `
    padding: 25px;
    font-size: 40px;
    
    h1 {
        color: white;
        
    }
`;

const ContentMedia = styled.div `
    max-width: 874px;
`;

const Controls = styled.div ` 
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 50px;
`;

const Player = styled.button `
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);

    img {
        height: 45px;
        width: 45px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 50px;
        padding: 0px 22px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img {
            width: 40px;
            height: 35px;
        }
    }
`;

const Trailer = styled.button `
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 50px;
    width: 140px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

    img {
        height: 35px;
        width: 45px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }
`;

const AddList = styled.div `
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    span {
        background-color: rgb(249, 249 ,249);
        display: inline-block;

        &:first-child {
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2) {
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }
`;

const GroupWatch = styled.div `
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;

    div {
        height: 40px;
        width: 40px;
        background: rgb(0, 0, 0);
        border-radius: 50%;
    }

    .MuiSvgIcon-root {
        width: 100%;
        margin-top: 10px;
    }
`;

const Subtitle = styled.div `
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    
    @media (max-width: 768px) {
        font-size: 12px;
    }

`;

const Description = styled.div `
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export default Detail;
