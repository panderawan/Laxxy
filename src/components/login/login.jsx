
import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
  const signIn = (e) => {
    e.preventDefault();

    //   v8
    //   auth.signInWithPopup(provider).catch(error => alert(error.message))

    signInWithPopup(auth, provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src='https://t4.ftcdn.net/jpg/05/11/87/37/360_F_511873784_NLmIMOcuwo9JTuoXJNyR0jQSQOUXUvFk.jpg'
          alt=''
        />
        <StyledHeader>Connectez-vous sur Laxxy</StyledHeader>
        <Button onClick={signIn}>Connexion avec Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 00, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 200px;
    margin-bottom: 0px;
  }

  > button {
    margin-top: 20px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;

const StyledHeader = styled.h1`
  font-size: 3em;
`;