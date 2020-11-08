import React, { useState } from 'react';
import { LearnViewProps } from 'utils/types';

import shuffleArray from 'utils/shuffleArray';
import useAnsweredCorrectly from 'hooks/useAnsweredCorrectly';

const LearnChoose: React.FC<LearnViewProps> = ({ index, data, setNextView }) => {
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const words = ['shit', data.translation, 'fuck', 'sex'];
  const answers = shuffleArray(words);
  const answeredCorrectly = useAnsweredCorrectly();

  const handleCheck = (word: string) => {
    if (word === data.translation) {
      answeredCorrectly(index);
      setNextView();
    } else {
      setWrongAnswer(true);
    }
  };
  return (
    <>
      <h1>Firebulary</h1>
      <div>{data.word}</div>
      {wrongAnswer ? <p>wrong !</p> : null}
      <div className="flex flex-col">
        {answers.map(word => (
          <button onClick={() => handleCheck(word)}>{word}</button>
        ))}
      </div>
    </>
  );
};

export default LearnChoose;
