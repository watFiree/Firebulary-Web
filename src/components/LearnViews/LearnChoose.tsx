import React, { useState, useEffect } from 'react';
import { functions } from 'fb';
import { LearnViewProps } from 'utils/types';

import useLearnViewFunctions from 'hooks/useLearnViewFunctions';
import AnswerResponse from './AnswerResponse';
import Button from 'components/Button';

const LearnChoose: React.FC<LearnViewProps> = ({ index, data, setNextView }) => {
  const [
    handleCheck,
    isAnswerCorrect,
    responsePopover,
    isResultShown,
    showResult,
  ] = useLearnViewFunctions(index, data.translation, setNextView);
  const [answers, setAnswers] = useState<string[]>([]);
  const shuffleArray = functions.httpsCallable('shuffleArray');
  useEffect(() => {
    console.log('shuffled');
    shuffleArray(['shit', data.translation, 'fuck', 'sex'])
      .then(res => setAnswers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {responsePopover && isAnswerCorrect !== undefined ? (
        <AnswerResponse isResCorrect={isAnswerCorrect} />
      ) : null}

      <div className="h-1/6 lg:h-1/3 w-full flex flex-col items-center justify-center">
        <h2 className="sm:text-6xl text-4xl text-black">{data.word}</h2>
        {isResultShown ? (
          <p className="sm:text-4xl text-2xl text-gray-200 font-semibold">{data.translation}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap align-center justify-center w-full sm:w-3/4 mx-auto h-full md:h-1/2">
        {answers.map((word, index) => (
          <button
            className="sm:w-64 w-48 sm:h-24 h-20 mx-8 2xl:mx-16 bg-none hover:bg-blue-700 border-gray-900 dark:border-black border-2 text-2xl"
            onClick={() => handleCheck(word)}
          >
            {String.fromCharCode(97 + index).toUpperCase()}. {word}
          </button>
        ))}
      </div>

      <div className="w-1/3 mx-auto h-64 flex flex-col items-center justify-around">
        {isResultShown ? null : (
          <Button color="indigo" onClick={showResult}>
            hint
          </Button>
        )}

        <Button color="red" onClick={setNextView}>
          skip
        </Button>
      </div>
    </>
  );
};

export default LearnChoose;
