import React from 'react';
import AuthForm from '../components/AuthForm';
import BackgroundLogin from '../assets/images/background-login.jpeg';
import Logo from '../assets/images/logo_eli_2.png';

const LoginPage = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-screen flex relative">
        <img className="object-cover" src={BackgroundLogin} alt="" />
        <img className="absolute top-20 left-1/2 w-44 h-44 transform -translate-x-1/2" src={Logo} alt="" />
      </div>
      <div className="w-full md:w-1/2 h-screen flex flex-row justify-center items-center">
        <AuthForm />
      </div>
    </section>
  );
};

export default LoginPage;
