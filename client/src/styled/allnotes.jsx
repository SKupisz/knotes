import styled from "styled-components";

export const AllNotesContainer = styled.section`
    width: calc(95% - 20px);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 4px #000;
    background: rgb(26,26,26);
    text-align: center;
    font-family: "Gemunu Libre", sans-serif;
    color: white;
    position: relative;
    top: 10vh;
    height: 65vh;
    overflow-y: hidden;

    @media screen and (min-width: 375px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 20px);
    }
`;

export const AllNotesHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.07em;
    margin-bottom: 4vh;
    position: relative;
    top: 1vh;
    text-shadow: 3px 3px 4px #000;

    @media screen and (min-width: 425px){
        width: calc(90% - 10px);
        font-size: 1.8em;
    }
`;

export const AllNotesWrapper = styled.section`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;   
    height: 50vh;
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 10px;
    } 
    &::-webkit-scrollbar-track{
        background: rgb(44,44,44);
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb{
        background: rgb(88,88,88);
        border-radius: 5px;
    }

    @media screen and (min-width: 375px){
        width: calc(95% - 10px);
    }

    @media screen and (min-width: 425px){
        width: calc(90% - 10px);
    }
`;

export const NoteWrapper = styled.div`
    width: calc(100% - 10px);
    margin-bottom: 3vh;
    min-height: 5vh;
    border-radius: 5px;
    box-shadow: 0px 2px 4px #000;
    background: rgb(23,23,23);
    padding: 10px 5px;
    transition: all 0.4s;

    &:hover{
        filter: brightness(110%);
    }

    @media screen and (min-width: 600px){
        width: calc(90% - 10px);
    }
`;

export const NoteTitle = styled.header`
    width: calc(60% - 10px);
    padding: 5px;
    text-align: left;
    text-indent: 0.7em;
    font-size: 0.9em;
    line-height: 1.7em;
    letter-spacing: 0.07em;
    display: inline-block;
    vertical-align: top;
    text-shadow: 3px 3px 4px #000;

    @media screen and (min-width: 375px){
        line-height: 2.1em;
    }

    @media screen and (min-width: 425px){
        width: calc(55% - 10px);
        font-size: 1.1em;
    }

    @media screen and (min-width: 600px){
        text-indent: 1em;
        font-size: 1.3em;
        line-heigt: 1.7em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.7em;
        line-height: 1.7em;
        text-indent: 1.2em;
    }
`;

export const NoteOptions = styled.div`
    width: calc(40% - 10px);
    padding: 5px;
    text-align: center;
    display: inline-block;
    vertical-align: top;

    @media screen and (min-width: 425px){
        width: calc(45% - 10px);
    }
`;

export const NoteOptionWrapper = styled.div`
    font-size: 0.6em;
    display: inline-block;
    vertical-align: top;
    margin-right: 10px;
    text-shadow: 3px 3px 4px #000;

    @media screen and (min-width: 375px){
        font-size: 0.8em;
    }

    @media screen and (min-width: 425px){
        font-size: 1em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.3em;
    }
`;

export const NotSignedInContainer = styled.div`
    width: calc(95% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.7em;
    letter-spacing: 0.07em;
    color: white;
    font-family: "Gemunu Libre", sans-serif;
    text-shadow: 3px 3px 4px #000;
    position: relative;
    top: 10vh;

    a{
        text-decoration: none;
    }

    @media screen and (min-width: 375px){
        font-size: 1.9em;
    }

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        font-size: 2.1em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
    }
`;

export const NotSignedInHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.01em;
    color: rgba(200,0,0,.9);
    margin-bottom: 9vh;

    @media screen and (min-width: 768px){
        font-size: 1.1em;
        width: calc(90% - 10px);
    }
`;

export const NotSignedInLink = styled.div`
    width: fit-content;
    padding: 20px 40px;
    border-radius: 10px;
    font-size: 0.81em;
    color: white;
    transition: all 0.4s;
    background: rgba(22,22,22,.9);

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 768px){
        font-size: 0.9em;
    }
`;