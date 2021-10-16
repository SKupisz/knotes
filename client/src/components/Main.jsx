import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import { MainContainer } from "../styled/general.jsx";

import Navbar from "./Navbar.jsx";
import Welcome from "./subsections/Welcome.jsx";
import AllNotes from "./subsections/AllNotes.jsx";
import SignIn from "./subsections/SignIn.jsx";
import CreateNotePanel from "./subsections/CreateNote.jsx";

import Welcome_Intro_Background from "../images/welcome_background.jpg";
import Welcome_Intro_Creating_Icon from "../images/create_document.png";

const Main = () => {
    return <MainContainer className="block-center">
        <Router>    
            <Navbar/>
            <Route exact path="/" component={() => <Welcome background={Welcome_Intro_Background} createImg={Welcome_Intro_Creating_Icon}/>}/>
            <Route exact path="/notes" component={() => <AllNotes/>}/>
            <Route exact path="/signin" component={() => <SignIn mode={1}/>}/>
            <Route exact path="/signup" component={() => <SignIn mode={-1}/>}/>
            <Route exact path="/create-note" component={() => <CreateNotePanel/>}/>
        </Router>
    </MainContainer>
};

export default Main;