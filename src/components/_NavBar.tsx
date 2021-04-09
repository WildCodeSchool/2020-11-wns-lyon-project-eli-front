import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import logo from '../assets/images/Logo-eli-1.png';

export function Navbar(): JSX.Element {
  return (
    <nav className="fixed min-h-screen bg-gray-600 w-48 pt-3 flex flex-col items-center">
      <div className="text-white w-3/4 my-4 h-1/4 flex items-center justify-center">
        <img src={logo} alt="" />
      </div>
      <div className="h-2/4">
        <ul className="flex flex-col h-full justify-around text-xl font-medium text-center">
          <li className="text-white text-opacity-50 mb-8 mt-16">
            <NavLink
              to="/home"
              activeStyle={{
                color: 'white',
                opacity: '100',
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="text-white text-opacity-50 mb-8">
            <NavLink
              to="/quiz"
              activeStyle={{
                color: 'white',
                opacity: '100',
              }}
            >
              Quiz
            </NavLink>
          </li>
          <li className="text-gray-500 font-bold mb-8">Lien 3</li>
          <li className="text-gray-500 font-bold mb-8">Lien 4</li>
          <li className="text-gray-500 font-bold mb-8">Lien 5</li>
          <li className="text-gray-500 font-bold mb-8">Lien 6</li>
        </ul>
      </div>
    </nav>
  );
}
