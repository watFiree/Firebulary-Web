import React, { useState } from 'react';
import { LearnViewProps } from 'utils/types';

import shuffleArray from 'utils/shuffleArray';
import useAnsweredCorrectly from 'hooks/useAnsweredCorrectly';
import Button from 'components/Button';

const LearnChoose: React.FC<LearnViewProps> = ({ index, data, setNextView }) => {
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const words = ['shit', data.translation, 'fuck', 'sex'];
  const answers = shuffleArray(words);
  const answeredCorrectly = useAnsweredCorrectly();

  const handleCheck = (answer: string) => {
    if (!showResult && answer === data.translation) {
      answeredCorrectly(index);
      setNextView();
    } else if (showResult && answer === data.translation) {
      setNextView();
    } else {
      setWrongAnswer(true);
    }
  };

  const handleSkip = () => setNextView();

  return (
    <>
      <div className="h-1/3 w-full flex flex-col items-center justify-center">
        <h2 className="text-6xl text-black">{data.word}</h2>
        {showResult ? (
          <p className="text-4xl text-gray-200 font-semibold">{data.translation}</p>
        ) : null}
        {wrongAnswer ? <p className="text-red-700 text-xl font-semibold">Wrong answer !</p> : null}
      </div>
      <div className="flex flex-wrap align-center justify-center w-2/3 mx-auto h-1/3">
        {answers.map((word, index) => (
          <button
            className="w-64 h-24 mx-16 bg-orange-700 border-gray-900 border-2 text-2xl"
            onClick={() => handleCheck(word)}
          >
            {String.fromCharCode(97 + index).toUpperCase()}. {word}
          </button>
        ))}
      </div>
      <div className="w-1/3 mx-auto h-48 flex flex-col items-center justify-around">
        {showResult ? null : (
          <Button color="indigo" onClick={() => setShowResult(true)}>
            hint
          </Button>
        )}

        <Button color="red" onClick={handleSkip}>
          skip
        </Button>
      </div>
    </>
  );
};

export default LearnChoose;
