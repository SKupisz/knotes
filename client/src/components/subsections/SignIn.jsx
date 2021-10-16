import React, {useState, useEffect} from "react";

import { SectionContainer } from "../../styled/general.jsx";
import { SigningContainer, SigningHeader, SigningInput, SigninSubmitBtn } from "../../styled/signing.jsx";

const SignIn = ({mode}) => { // 1 - logowanie, -1 - rejestracja

    const [username, setUsername] = useState("");
    const [passwd, setPasswd] = useState("");
    const [passwdRep, setPasswdRep] = useState("");
    const [arePasswdsDifferent, toggleArePasswdsDifferent] = useState(false);

    useEffect(() => {
        if(mode === -1) toggleArePasswdsDifferent(passwd !== passwdRep);
    }, [passwd, passwdRep]);

    return <SectionContainer>
        <SigningContainer className="block-center">
            <SigningHeader className="block-center">
                {mode === 1 ? "Logowanie" : "Rejestracja"}
            </SigningHeader>
            <SigningInput type="text" placeholder="Login..." className="block-center" value={username} onChange = {(e) => setUsername(e.target.value)}/>
            <SigningInput type="password" placeholder="Hasło..." className={mode === -1 ? arePasswdsDifferent ? "block-center not-equal-passwds" : 
            "block-center" : "block-center"}
            value = {passwd} onChange = {(e) => setPasswd(e.target.value)}/>
            {mode === -1 ? <SigningInput type="password" placeholder="Powtórz hasło..." className={arePasswdsDifferent ? "block-center not-equal-passwds" : "block-center"}
            value={passwdRep} onChange = {(e) => setPasswdRep(e.target.value)}/>: null}
            <SigninSubmitBtn className="block-center">
                {mode === 1 ? "Zaloguj" : "Zarejestruj"}
            </SigninSubmitBtn>
        </SigningContainer>
    </SectionContainer>;
};

export default SignIn;