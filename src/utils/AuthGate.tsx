import React from 'react';
import { useCookies } from 'react-cookie';
// import { useUserQuery } from "../network/userQuery";
import LoginPage from '../pages/LoginPage';
import { useAuthToken } from '../hooks/auth';
import Dashboard from '../pages/Dashboard';

export const AuthGate = (): JSX.Element => {
  const [authToken] = useAuthToken();
  // const userData = useUserQuery();
  const [cookies, ,] = useCookies(['user']);

  if (cookies && authToken) return <Dashboard />;

  return <LoginPage />;
};
