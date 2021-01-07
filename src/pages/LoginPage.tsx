import React from 'react';
import AuthForm from '../components/AuthForm';
import BackgroundLogin from '../assets/images/background-login.jpeg';

const LoginPage = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-screen bg-red-500 flex">
        <img className="object-cover" src={BackgroundLogin} alt="" />
      </div>
      <div className="w-full md:w-1/2 h-screen flex flex-row justify-center items-center">
        <AuthForm />
      </div>
    </section>
  );
};

export default LoginPage;
