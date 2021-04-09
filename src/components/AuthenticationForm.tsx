import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useLoginMutation } from '../mutation/loginMutation';
import Logo from '../icons/Logo_eli_2.png';

const React = require('react');

const AuthenticationForm = (): JSX.Element => {
  const [loginMutation] = useLoginMutation();
  const { handleSubmit, register } = useForm();
  const [error, setError] = useState();

  const onSubmit = async (values: { email: string, password: string }) => {
    try {
      // @ts-ignore
      // don't know how to types this (yet)
      await loginMutation(values.email, values.password);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <section className="bg-gradient-to-r from-green-500 via-green-300 to-blue-300 flex items-center justify-center min-h-screen ">
      <div className="container bg-white flex flex-col items-center justify-center shadow p-10 rounded w-3/4 md:w-1/2 lg:w-1/4" >
        <img
          src={Logo}
          alt="Logo"
          width={128}
          height={128}
        />
        {/*<h1 className="text-2xl font-medium text-center text-gray-400 my-5">Sign in</h1>*/}
        {error && <pre className="text-red-900 mt-10">try again</pre>}
        <form
          className="flex flex-col justify-center items-center mt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col mb-4">
            <input
              className="w-full rounded-md p-2 border-solid border border-green-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
              name="email"
              ref={register()}
              placeholder="email" />
          </div>
          <div>
            <input
              className="w-full rounded-md p-2 border-solid border border-green-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
              name="password"
              type="password"
              ref={register()}
              placeholder="******"
            />
          </div>
          <button
            className="w-full sm:w-1/2 rounded-md bg-green-500 hover:bg-blue-400 p-2 mt-10 focus:outline-none text-white"
            type="submit">
            Sign in
          </button>
          <a href="/" className="text-sm font-medium text-center text-gray-400 mt-5">Forgot password ?</a>
        </form>
      </div>
      {/*<CreateUser />*/}
    </section>
  );
};

export default AuthenticationForm;
