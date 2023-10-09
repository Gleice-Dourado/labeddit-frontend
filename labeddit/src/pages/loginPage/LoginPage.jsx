import { useContext, useEffect, useState } from "react"
import logofull from "../../assets/logo-full.svg"
import { Divisor, EmailSection, FormArticle, LoginWrapper, LogoImg, Input, PasswordInput, PasswordSection, VisibilityBtn, LoginBtn, SignupBtn, LogoContainer, LogoHeader, ErrorMessage } from "./LoginPageStyle";
import useForm from "../../hooks/useForm";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToFeedPage, goToSignupPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
;

export const LoginPage = () => {
    const context = useContext(GlobalContext);
    const navigate = useNavigate();
    
    const { login, validateEmail, validatePassword } = context;

    const [showPassword, setShowPassword] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false)
    

    const [form, onChangeInput, clearInputs] = useForm({
        email: '',
        password: ''
      });
      

    const onSubmit = async (e) => {
        e.preventDefault();

        setIsEmailValid(validateEmail(form.email));
        setIsPasswordValid(validatePassword(form.password));

        try {
            const { token } = isEmailValid && isPasswordValid && await login({
                email: form.email,
                password: form.password
            });

            localStorage.setItem('token', token);
            goToFeedPage(navigate)
        } catch (error) {   
            console.log(error.response)
            setErrorMessage(true)
            
            
        }
    }

    
    return(
        <LoginWrapper>
            <LogoContainer>
                <LogoImg src={logofull} alt='Labeddit Logo'/>
                <LogoHeader>O projeto de rede social da Labenu</LogoHeader>
            </LogoContainer>
            
            <FormArticle>
                <form onSubmit={onSubmit}>
                    <EmailSection>
                        <Input
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            value={form.email}
                            type="email"
                            onChange={onChangeInput}
                            //pattern="/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g" //ou ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
                            required
                        />
                    </EmailSection>
                    
                    <PasswordSection>
                        <PasswordInput
                            id="password"
                            name="password"
                            placeholder="Senha"
                            value={form.password}
                            type={showPassword? 'text' : 'password'}
                            onChange={onChangeInput}
                            //pattern="/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,10}$/g"                   
                            required
                        />

                        <VisibilityBtn onClick={() => setShowPassword(!showPassword)} >
                            {showPassword? 
                                <i className="fa-regular fa-eye-slash"></i> : 
                                <i className="fa-regular fa-eye"></i>
                            }
                        </VisibilityBtn>
                    </PasswordSection>

                    {errorMessage? 
                        <ErrorMessage>
                            <span className="material-symbols-outlined" style={{color: 'red'}}>
                                priority_high
                            </span>
                            <p>E-mail ou senha incorreto(a)</p>
                        </ErrorMessage> 
                        : null
                    }

                    <LoginBtn type="submit">Continuar</LoginBtn>
                    
                    <Divisor></Divisor>

                    <SignupBtn 
                        type="button" 
                        onClick={()=>goToSignupPage(navigate)}
                    >
                        Crie uma conta!
                    </SignupBtn>
                    
                </form>
            </FormArticle>
        </LoginWrapper>
    )
}

export default LoginPage