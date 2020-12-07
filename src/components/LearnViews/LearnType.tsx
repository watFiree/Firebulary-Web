import React, { useRef } from 'react';
import { LearnViewProps } from 'utils/types';

import useLearnViewFunctions from 'hooks/useLearnViewFunctions';
import AnswerResponse from './AnswerResponse';
import Button from 'components/Button';

const LearnType: React.FC<LearnViewProps> = ({ data, index, setNextView }) => {
  const input = useRef<HTMLInputElement>(null);
  const [
    handleCheck,
    isAnswerCorrect,
    responsePopover,
    isResultShown,
    showResult,
  ] = useLearnViewFunctions(index, data.translation, setNextView);

  return (
    <>
      {responsePopover && isAnswerCorrect !== undefined ? (
        <AnswerResponse isResCorrect={isAnswerCorrect} />
      ) : null}
      <div className="h-1/3 w-full flex flex-col items-center justify-center">
        <h2 className="text-6xl text-black">{data.word}</h2>
        {isResultShown ? (
          <p className="text-4xl text-gray-200 font-semibold">{data.translation}</p>
        ) : null}
      </div>
      <div className="flex flex-col items-center w-full lg:w-2/3 mx-auto h-3/4">
        <div className="w-4/5 my-16 flex items-center">
          <input
            name="answer"
            placeholder="Your answer"
            ref={input}
            className="h-12 w-4/5 xl:w-3/5 text-lg p-3 mr-10 placeholder-gray-500::placeholder placeholder-opacity-75 border-solid border-1 border-gray-700 rounded-xl shadow"
          />

          <Button
            onClick={() =>
              handleCheck(input?.current?.value !== undefined ? input?.current?.value : '')
            }
          >
            check
          </Button>
        </div>
        <div className="w-1/3 mx-auto h-48 flex flex-col items-center justify-around">
          {isResultShown ? null : (
            <Button color="blue" onClick={showResult}>
              Hint
            </Button>
          )}
          <Button color="red" onClick={setNextView}>
            skip
          </Button>
        </div>
      </div>
    </>
  );
};

export default LearnType;
