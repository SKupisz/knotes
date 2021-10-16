import styled from "styled-components";

export const WelcomeIntroSection = styled.section`
    width: 100%;
    height: 80vh;
    background: ${(props) => 
        props.backgroundsrc ? `url(${props.backgroundsrc})` : "rgb(27,27,27)"};
    background-size: cover;
`;

export const WelcomeIntroWrapper = styled.div`
    width: inherit;
    height: inherit;
    position: absolute;
    box-shadow: inset 0px -4px 10px #000;
    background: rgba(22,22,22,.7);
`;

export const WelcomeHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.6em;
    letter-spacing: 0.08em;
    color: white;
    font-family: "Gemunu Libre", sans-serif;
    margin-bottom: 6vh;
    position: relative;
    top: 2vh;
    text-shadow: 3px 3px 4px #000;
    transition: all 0.4s;

    @media screen and (min-width: 320px){
        font-size: 1.8em;
    }

    @media screen and (min-width: 425px){
        font-size: 2.3em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 2.7em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 3.2em;
    }
`;

export const WelcomeDesc = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.09em;
    color: white;
    font-family: "Gemunu Libre", sans-serif;
    text-shadow: 3px 3px 4px #000;
    margin-bottom: 3vh;
    transition: all 0.4s;
    animation-name: IntroDescAnimation;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;

    @media screen and (min-width: 320px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 425px){
        font-size: 1.6em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 10px);
        font-size: 1.8em;
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 10px);
        font-size: 2em;
    }
`;

export const CreateButtonWrapper = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    position: relative;
    transition: left 0.4s;
    left: ${(props) => 
        props.left ? props.left : "0%"};  

    @media screen and (min-width: 320px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 425px){
        width: calc(60% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(50% - 20px);
    }
`;

export const CreateButtonHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.4em;
    font-family: "Gemunu Libre", sans-serif;
    color: white;
    text-shadow: 3px 3px 4px #000;
    margin-bottom: 4vh;
    position: relative;
    top: 1vh;

    @media screen and (min-width: 320px){
        font-size: 1.7em;
    }

    @media screen and (min-width: 1024px){
        font-size: 2.1em;
        width: calc(90% - 10px);
    }
`;

export const CreateButtonImg = styled.img`
    width: 90%;
    height: auto;
    max-height: 25vh;
    width: auto;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        width: 80%;
        height: auto;
        max-height: 30vh;
        width: auto;
    }

    @media screen and (min-width: 1024px){
        width: 80%;
        height: auto;
        max-height: 40vh;
        width: auto;
    }
`;