import React, { useState } from 'react';
import { LearnViewProps } from 'utils/types';

import useAnsweredCorrectly from 'hooks/useAnsweredCorrectly';
import Button from 'components/Button';

const LearnType: React.FC<LearnViewProps> = ({ data, index, setNextView }) => {
  const [showResult, setShowResult] = useState(false);
  const [answer, setAnswer] = useState('');
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const answeredCorrectly = useAnsweredCorrectly();

  const handleCheck = () => {
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
      <div className="flex flex-col items-center w-2/3 mx-auto h-1/3">
        <div className="w-4/5 my-16 flex items-center">
          <input
            name="answer"
            placeholder="Your answer"
            onChange={e => setAnswer(e.target.value)}
            className="h-12 w-4/5 xl:w-3/5 text-lg p-3 mr-10 placeholder-gray-500::placeholder placeholder-opacity-75 border-solid border-1 border-gray-700 rounded-xl shadow"
          />

          <Button onClick={handleCheck}>check</Button>
        </div>
        <div className="w-1/3 mx-auto h-48 flex flex-col items-center justify-around">
          {showResult ? null : (
            <Button color="blue" onClick={() => setShowResult(true)}>
              Hint
            </Button>
          )}
          <Button color="red" onClick={handleSkip}>
            skip
          </Button>
        </div>
      </div>
    </>
  );
};

export default LearnType;
