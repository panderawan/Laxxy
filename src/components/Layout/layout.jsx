import React from 'react';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';
import Sidebar from '../sidebar/sidebar';
import Header from './../header/header';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Login from './../login/login';

function Layout() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src='https://t4.ftcdn.net/jpg/05/11/87/37/360_F_511873784_NLmIMOcuwo9JTuoXJNyR0jQSQOUXUvFk.jpg'
            alt='Logo Laxxy'
          />
          <Spinner />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Outlet />
          </AppBody>
        </>
      )}
    </>
  );
}

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 20px;
  }
`;

const Spinner = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid;
  border-color: #b0b0b0 transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export default Layout;
