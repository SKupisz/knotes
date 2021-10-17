import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";

const Logout = ({deleteUsernameCookie, currentDataCallback}) => {

    const history = useHistory();

    useEffect(() => {
        deleteUsernameCookie("username");
        currentDataCallback(null);
        history.push("/");
    }, []);

    return <></>;
};

export default Logout;