import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const userContext = () => {

    return useContext(AuthContext)

}

export default userContext