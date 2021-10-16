import React, {useState} from "react";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

import { NavbarContainer, LeftPart, RightPart, NavbarElem, NavbarLogoWrapper, ResponsiveOpen } from "../styled/navbar.jsx";

const Navbar = () => {
    
    const [isOpened, toggleIsOpened] = useState(false);

    const NavbarElems = [
        [
            {
                to: "/",
                content: "Strona główna"
            },
            {
                to: "/notes",
                content: "Wszystkie notatki"
            },
            {
                to: "/create-note",
                content: "Nowa notatka"
            },
        ],
        [
            {
                to: "/signin",
                content: "Zaloguj się"
            },
            {
                to: "/signup",
                content: "Zarejestruj się"
            },
            {
                to: "/#",
                content: "Wyloguj się"
            }
        ]
    ];

    return <NavbarContainer isopened={isOpened}>
        <ResponsiveOpen onClick={() => toggleIsOpened(!isOpened)}>
            <MenuIcon style={{color: "white", fontSize: "2.7em"}}/>
        </ResponsiveOpen>
        <LeftPart>
            {NavbarElems[0].map((elem, ind) => <Link to = {elem["to"]} key = {"leftElem"+ind} onClick = {() => toggleIsOpened(false)}><NavbarElem>
                {elem["content"]}
                </NavbarElem>
            </Link>)}
        </LeftPart>
        <RightPart>
            {NavbarElems[1].map((elem, ind) => <Link to = {elem["to"]} key = {"rightElem"+ind} onClick = {() => toggleIsOpened(false)}><NavbarElem>
                {elem["content"]}
            </NavbarElem></Link>)}
        </RightPart>
    </NavbarContainer>;
};

export default Navbar;