import React from 'react';
import { useRecoilValue } from 'recoil';
import dataState from 'state/data';

import useDeleteWord from 'hooks/useDeleteWord';

const Dictionary = () => {
  const { dictionary } = useRecoilValue(dataState);
  const handleDelete = useDeleteWord();
  return (
    <>
      <h1>Dictionary</h1>
      <table>
        <tr>
          <th>Word</th>
          <th>Translation</th>
        </tr>
        {dictionary.map((section, index) => (
          <tr key={index}>
            <td>{section.word}</td>
            <td>{section.translation}</td>
            <td>
              <button onClick={() => handleDelete(index)}>delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Dictionary;
