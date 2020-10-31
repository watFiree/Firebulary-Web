import React from 'react';
import { WordProp } from 'utils/types';

const LearnChoose: React.FC<{ data: WordProp; setNextWord: () => void }> = ({
  data,
  setNextWord,
}) => {
  return (
    <>
      <h1>Firebulary</h1>
      <div>{data.word}</div>
      <div>
        <button onClick={setNextWord}>a</button>
        <button>{data.translation}</button>
        <button>c</button>
        <button>d</button>
      </div>
    </>
  );
};

export default LearnChoose;
