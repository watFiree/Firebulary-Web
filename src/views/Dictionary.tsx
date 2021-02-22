import React from 'react';
import { functions } from 'fb';
import { useRecoilValue } from 'recoil';
import dataState from 'state/data';

import Heading from 'components/SubViewHeading';

const Dictionary = () => {
  const { dictionary } = useRecoilValue(dataState);
  const deleteWord = functions.httpsCallable('deleteWord');
  return (
    <div className="w-full min-h-full h-full flex flex-col">
      <Heading label="Dictionary" />
      <table className="table-fixed mt-8 mx-auto min-w-2/3 border-black border-2">
        <tr>
          <th className="w-2/5 text-xl py-2 border-2 border-black ">Word</th>
          <th className="w-2/5 text-xl py-2 border-2 border-black">Translation</th>
          <th className="w-1/5 text-xl py-2 px-2 border-2 border-black">Actions</th>
        </tr>
        {dictionary.map((section, index) => (
          <tr key={index}>
            <td className="text-lg border-2 border-black font-semibold py-4 text-center">
              {section.word}
            </td>
            <td className="text-lg border-2 border-black font-semibold py-4 text-center">
              {section.translation}
            </td>
            <td className="border-2 border-black text-center">
              <button onClick={() => deleteWord(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bucket"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#F41226"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 9l-2 9a2 2.5 0 0 1 -2 2h-6a2 2.5 0 0 1 -2 -2l-2 -9Z" />
                  <path d="M7 9a5 5 0 0 1 10 0" />
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Dictionary;
