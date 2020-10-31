import React from 'react';
import { useRecoilState } from 'recoil';
import dataState from 'state/data';

import useDeleteWord from 'hooks/useDeleteWord';
import Layout from 'components/Layout';

const Dictionary = () => {
  const [{ dictionary }, setState] = useRecoilState(dataState);
  const handleDelete = useDeleteWord();
  return (
    <Layout>
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
    </Layout>
  );
};

export default Dictionary;
