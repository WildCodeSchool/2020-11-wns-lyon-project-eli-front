import React from 'react';

export const AuthForm = (): JSX.Element => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="h-52 bg-green-400 rounded-md w-1/2 flex flex-col items-center justify-center">
        <h3 className="text-left">Formulaire de connexion</h3>
        <div className="w-1/2 flex flex-col mb-2">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input className="w-full rounded-md" id="email" type="email" name="email" />
        </div>
        <div className="w-1/2 flex flex-col">
          <label className="mb-2" htmlFor="password">
            Password
          </label>
          <input className="w-full rounded-md" id="password" type="password" name="password" />
        </div>
      </form>
    </div>
  );
};
