import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { useLoginMutation } from '../utils/loginMutation';

const AuthForm = (): JSX.Element => {
  const { login } = useLoginMutation();
  const { handleSubmit, register } = useForm();
  const [error, setError] = useState();

  const onSubmit = async (values: { email: string; password: string }) => {
    try {
      await login(values.email, values.password);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      {error && <pre>try again</pre>}
      <form
        className="p-2 rounded-md w-1/2 flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl font-medium mb-10">CONNECTION</h1>
        <div className="w-full flex flex-col mb-4">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-md p-2 border-solid border border-gray-400"
            type="email"
            name="email"
            ref={register()}
            placeholder="email"
          />
        </div>
        <div className="w-full flex flex-col mb-8">
          <label className="mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full rounded-md p-2 border-solid border border-gray-400"
            name="password"
            type="password"
            ref={register()}
            placeholder="mot de passe"
          />
        </div>
        <button className="w-full sm:w-1/2 rounded-full bg-blue-500 p-2 focus:outline-none text-white" type="submit">
          Se connecter
        </button>
      </form>
    </>
  );
};

export default AuthForm;
