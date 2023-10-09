import styled from "styled-components";

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    //margin-bottom: -35px;


`

export const LogoImg = styled.img`
    //scale: .9;
    height: 11em;
    //margin-bottom: -18px;
    margin-bottom: -1.2em;
`
export const LogoHeader = styled.h3`
    text-align: left;
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #000000;
`

export const FormArticle = styled.article`
    //margin: 80px;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    //margin-bottom: -1px;
`

export const EmailSection = styled.section`
    width: 22em;
    height: 2.8em;
    margin-bottom: .8em;

`
    
export const Input = styled.input`
   width: 99%;
   height: 99%;
    border: solid .5px rgb(223, 221, 221);
    border-radius: 5px;
`

export const PasswordSection = styled.section`
    width: 22.2em;
    height: 2.8em;
    margin-bottom: 4em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const PasswordInput = styled.input`
    width: 99%;
    height: 99%;  
    border: solid .5px rgb(223, 221, 221);
    border-radius: 5px; 
`

export const VisibilityBtn = styled.div`
    position: absolute;
    right: 50px;

    .fa-eye-slash,
    .fa-eye{
        color: #cdcaca;
    }
`

export const LoginBtn = styled.button`
    height: 3.2em;
    width: 22em;
    border-radius: 2em;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: none;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    font-family: 'IBM Plex Sans', sans-serif;
    margin-bottom: .5em;

    &:active{
        transform: scale(1.1);
        transition: all ease .5s;
    }
`

export const Divisor = styled.div`
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    height: 1px;
    width: 22.2em;
    margin-bottom: .5em;
`

export const SignupBtn = styled.button`
    height: 3.2em;
    width: 22em;
    border-radius: 2em;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: none;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    font-family: 'IBM Plex Sans', sans-serif;

    &:active{
        transform: scale(1.05);
        transition: all ease .5s;
    }
`

export const ErrorMessage = styled.div`
    
    margin: -3.3em 0 .5em 0;

    display: flex;
    flex-direction: row;
    align-items: center;

    & p{
        color: red;
        font-size: 13px;
        font-weight: 700;
        line-height: 13px;
        font-family: 'IBM Plex Sans', sans-serif;
    }
`