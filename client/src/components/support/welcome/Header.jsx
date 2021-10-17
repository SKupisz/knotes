import React, {useState, useEffect} from "react";

import { WelcomeHeader } from "../../../styled/welcome.jsx";

const WelcomeHeaderWrapper = () => {

    const content = "Witaj w knotes!";
    let sliced = [];
    const [currentContent, setCurrentContent] = useState("");

    const updateTheContent = (i) => {
        if(i <= content.length){
            setTimeout(() => {
                let helper = "";
                for(let j = 0 ; j < i; j++){
                    helper+=sliced[j];
                }
                setCurrentContent(helper);
                updateTheContent(i+1);
            }, 20);
        }
    }

    useEffect(() => {
        sliced = content.split("");
        updateTheContent(0);
    }, []);

    return <WelcomeHeader className="block-center">
        {currentContent}
    </WelcomeHeader>;

};

export default WelcomeHeaderWrapper;