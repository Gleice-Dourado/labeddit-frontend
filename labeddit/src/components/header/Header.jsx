import { useNavigate } from "react-router-dom"
import headerLogo from "../../assets/logo-full.svg" 
import { Btn, HeaderWrapper, SecondaryContainer } from "./HeaderStyle"
import { goToLoginPage } from "../../routes/coordinator";


export const Header = () => {
    const navigate = useNavigate();

    const logoutFunction = () => {
        localStorage.removeItem('token')
        goToLoginPage(navigate)
    }

    const chooseButton = () => {
        if(location.pathname === '/signup'){
            return(
                <Btn
                    onClick={()=>goToLoginPage(navigate)}
                >Entrar</Btn>
            )
        }else{
            return(
                <Btn
                    onClick={()=>logoutFunction()}
                >Logout</Btn>
            )
        }
    }
    return(
        <HeaderWrapper>
            <SecondaryContainer>
                <img src={headerLogo} alt="Labeddit logo"/>

                {chooseButton()}
            </SecondaryContainer>
            
        </HeaderWrapper>
    )
}

export default Header