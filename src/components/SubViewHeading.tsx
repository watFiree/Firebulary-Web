import React from 'react';
import { Link } from 'react-router-dom';

const SubViewHeading: React.FC<{ label: string }> = ({ label }) => (
  <div className="w-full h-20 border-gray-900 border-b-4 flex items-center">
    <Link className="ml-8" to="/app">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-back-up"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#1a202c"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
      </svg>
    </Link>
    <h1 className="text-3xl ml-12 mb-1 font-semibold text-gray-900 ">{label}</h1>
  </div>
);

export default SubViewHeading;
