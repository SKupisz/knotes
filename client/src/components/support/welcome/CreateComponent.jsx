import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import { CreateButtonWrapper, CreateButtonHeader, 
    CreateButtonImg } from "../../../styled/welcome.jsx";

const CreateComponent = ({background}) => {

    const [left, setLeft] = useState("-100%");

    useEffect(() => {
        setTimeout(() => {
            setLeft("0%");
        }, 1000);
    }, []);

    return <CreateButtonWrapper className="block-center" left={left}>
        <CreateButtonHeader className="block-center">
            Zacznij tworzyć!
        </CreateButtonHeader>
        <Link to = "/create-note">
            <CreateButtonImg src={background} className="block-center"/>
        </Link>
    </CreateButtonWrapper>
};

export default CreateComponent;