import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

import { SectionContainer } from "../../styled/general.jsx";
import { SigningContainer, SigningHeader, SigningInput, 
    SigninSubmitBtn, ErrorLabel } from "../../styled/signing.jsx";

const SignIn = ({mode, API_URL, username_cookies, setUserCallback, 
    delUserCallback, currentData, setCurrentData}) => { // 1 - logowanie, -1 - rejestracja

    const history = useHistory();

    const [username, setUsername] = useState("");
    const [passwd, setPasswd] = useState("");
    const [passwdRep, setPasswdRep] = useState("");
    const [arePasswdsDifferent, toggleArePasswdsDifferent] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if(currentData !== null) {
            history.push("/notes");
        }
        else if(username_cookies["username"] !== undefined){
            const data = username_cookies["username"];
            if(data["email"] !== undefined && data["email"].length > 0
             && data["passwd"] !== undefined && data["passwd"].length > 0){
                axios.post(`${API_URL}/users/login`, {
                    email: data["email"],
                    password: data["passwd"]
                }, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => {
                    const data = response.data;
                    setUserCallback("username", {"email": username, "passwd": passwd, "token": data["token"]}, {path: "/"});
                    history.push("/notes");
                }).catch(() => {
                    delUserCallback("username");
                });
            }
        }
    }, [username_cookies, currentData]);

    useEffect(() => {
        if(mode === -1) toggleArePasswdsDifferent(passwd !== passwdRep);
    }, [passwd, passwdRep]);

    const handleTheRegister = async () => {
        if(username.length > 0 && passwd.length > 0){
            if(mode === -1 && (passwdRep.length === 0 || passwdRep !== passwd)){
                setError("Passwords are not the same");
            }
            else{
                const dataToPass = {
                    email: username,
                    password: passwd
                };
                setError("");
                if(mode === -1){
                    axios.post(`${API_URL}/users/signup`, dataToPass, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((response) => {
                        if(Object.keys(response).indexOf(error) !== -1){
                            setError(response.error);
                        }
                        else{
                            setError(response.message);
                        }
                    }).catch((error) => {
                        console.log("not operated", error);
                        if(error.response !== undefined && Object.keys(error.response).indexOf("status") !== -1){
                            switch(error.response.status){
                                case 401:
                                    setError("Połączenie nieprawidłowe. Spróbuj ponownie");
                                    break;
                                case 409: 
                                    setError("Ten email został już zarejestrowany");
                                    break;
                                case 500:
                                    setError("Problemy z połączeniem. Spróbuj ponownie");
                                    break;
                                case 101:
                                    history.push("/signin");
                                    break;
                                default:
                                    setError("Coś poszło nie tak. Spróbuj ponownie");
                                    break;
                            }
                        }
                        else{
                            console.log(error);
                        }
    
                    });
                }
                else{
                    axios.post(`${API_URL}/users/login`, dataToPass, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((response) => {
                        const data = response.data;
                        setUserCallback("username", {"email": username, "passwd": passwd, "token": data["token"]});
                        setCurrentData({
                            email: username,
                            passwd: passwd,
                            token: data["token"]
                        });
                        history.push("/notes");
                    }).catch((error) => {
                        console.log("not operated", error);
                        if(error.response !== undefined && Object.keys(error.response).indexOf("status") !== -1){
                            switch(error.response.status){
                                case 401:
                                    setError("Nieprawidłowe dane. Spróbuj ponownie");
                                    break;
                                case 500:
                                    setError("Problemy z połączeniem. Spróbuj ponownie");
                                    break;
                                default:
                                    setError("Coś poszło nie tak. Spróbuj ponownie");
                                    break;
                            }
                        }
                        else{
                            setError(error);
                        }
    
                    });
                }

            }
        }
    };

    return <SectionContainer>
        <SigningContainer className="block-center">
            <SigningHeader className="block-center">
                {mode === 1 ? "Logowanie" : "Rejestracja"}
            </SigningHeader>
            <SigningInput type="text" placeholder="Email..." className="block-center" value={username} onChange = {(e) => setUsername(e.target.value)}/>
            <SigningInput type="password" placeholder="Hasło..." className={mode === -1 ? arePasswdsDifferent ? "block-center not-equal-passwds" : 
            "block-center" : "block-center"}
            value = {passwd} onChange = {(e) => setPasswd(e.target.value)}/>
            {mode === -1 ? <SigningInput type="password" placeholder="Powtórz hasło..." className={arePasswdsDifferent ? "block-center not-equal-passwds" : "block-center"}
            value={passwdRep} onChange = {(e) => setPasswdRep(e.target.value)}/>: null}
            { error.length > 0 ? <ErrorLabel>{error}</ErrorLabel>: null}
            <SigninSubmitBtn className="block-center" onClick={() => handleTheRegister()}>
                {mode === 1 ? "Zaloguj" : "Zarejestruj"}
            </SigninSubmitBtn>
        </SigningContainer>
    </SectionContainer>;
};

export default SignIn;