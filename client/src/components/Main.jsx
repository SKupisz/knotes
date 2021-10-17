import React, {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useCookies} from "react-cookie";

import { MainContainer } from "../styled/general.jsx";

import Navbar from "./Navbar.jsx";
import Welcome from "./subsections/Welcome.jsx";
import AllNotes from "./subsections/AllNotes.jsx";
import SignIn from "./subsections/SignIn.jsx";
import CreateNotePanel from "./subsections/CreateNote.jsx";
import DisplayNote from "./subsections/DisplayNote.jsx";
import Logout from "./subsections/Logout.jsx";

import Welcome_Intro_Background from "../images/welcome_background.jpg";
import Welcome_Intro_Creating_Icon from "../images/create_document.png";

const Main = ({API_URL}) => {

    const [usernameCookie, setUsernameCookie, deleteUsernameCookie] = useCookies(["userData"]);
    const [userData, setUserData] = useState(null);

    return <MainContainer className="block-center">
        <Router>    
            <Navbar/>
            <Route exact path="/" component={() => <Welcome background={Welcome_Intro_Background} createImg={Welcome_Intro_Creating_Icon}/>}/>
            <Route exact path="/notes" component={() => <AllNotes username_cookies={usernameCookie}
                currentData = {userData} API_URL={API_URL}/>}/>
            <Route exact path="/signin" component={() => <SignIn mode={1} API_URL={API_URL} username_cookies={usernameCookie} 
                setUserCallback={setUsernameCookie} delUserCallback={deleteUsernameCookie}
                currentData={userData} setCurrentData={setUserData}/>}/>
            <Route exact path="/signup" component={() => <SignIn mode={-1} API_URL={API_URL} username_cookies={usernameCookie} 
                setUserCallback={setUsernameCookie} delUserCallback={deleteUsernameCookie}
                currentData={userData} setCurrentData={() => {}}/>}/>
            <Route exact path="/create-note" component={() => <CreateNotePanel username_cookies={usernameCookie}
            currentData={userData} API_URL={API_URL}/>}/>
            <Route path="/note/read" component = {() => <DisplayNote API_URL = {API_URL} username_cookies={usernameCookie}
            currentData={userData}/>}/>
            <Route exact path="/logout" component={() => <Logout deleteUsernameCookie={deleteUsernameCookie}
            currentDataCallback={setUserData}/>}/>
        </Router>
    </MainContainer>
};

export default Main;