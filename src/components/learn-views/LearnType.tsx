import React from 'react';
import { WordProp } from 'utils/types';

const LearnType: React.FC<{ data: WordProp; setNextWord: () => void }> = ({
  data,
  setNextWord,
}) => {
  return (
    <>
      <h1>Firebulary</h1>
      <div>{data.word}</div>
      <input name="translation" /> {/* dont know*/}
      <button onClick={setNextWord}>check</button>
    </>
  );
};

export default LearnType;
