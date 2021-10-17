import React, {useState} from "react";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

import { NavbarContainer, LeftPart, RightPart, NavbarElem, NavbarLogoWrapper, ResponsiveOpen } from "../styled/navbar.jsx";

const Navbar = ({userData}) => {
    
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
                ifNull: true, 
                to: "/signin",
                content: "Zaloguj się"
            },
            {
                ifNull: true,
                to: "/signup",
                content: "Zarejestruj się"
            },
            {
                ifNull: false,
                to: "/logout",
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
            {NavbarElems[1].map((elem, ind) => (userData === null) === elem["ifNull"] ? <Link to = {elem["to"]} key = {"rightElem"+ind} onClick = {() => toggleIsOpened(false)}><NavbarElem>
                {elem["content"]}
            </NavbarElem></Link> : null)}
        </RightPart>
    </NavbarContainer>;
};

export default Navbar;