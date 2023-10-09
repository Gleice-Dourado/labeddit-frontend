import axios from "axios";
import {GlobalContext} from "./GlobalContext"
import { BASE_URL } from "../constants/BASE_URL";

export default function GlobalState({children}){
    
    const login = async (body) => {
        const { data } = await axios.post(`${BASE_URL}/users/login`, body);
        console.log('login')
        return data
    };

    const signup = async (body) => {
        const { data } = await axios.post(`${BASE_URL}/users/signup`, body);
        console.log('signup');
        
        return data
    };

    const validateEmail = (email => email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/));
    const validatePassword = (password => password.match(/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,10}$/g));
    const validateName = (name, length = 2) => new RegExp(`.{${length},}`).test(name);

    const data = {
        login,
        signup,
        validateEmail, 
        validatePassword,
        validateName
    };

    return(
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}