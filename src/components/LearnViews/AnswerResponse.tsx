import React from 'react';
import HappyEmoji from 'assets/HappyEmoji.png';
import SadEmoji from 'assets/SadEmoji.png';

const AnswerResponse: React.FC<{ isResCorrect: boolean }> = ({ isResCorrect }) => {
  return (
    <div className="absolute top-1/3 w-full flex justify-center scale-0 animate-showup">
      <div className="flex flex-col items-center -mt-12 p-12 ">
        <img src={isResCorrect ? HappyEmoji : SadEmoji} alt="emoji" />
        <h2
          className={`text-4xl font-bold mt-4 py-4 px-8  rounded-full shadow-lg text-center ${
            isResCorrect ? 'bg-green-400' : 'bg-red-500'
          }`}
        >
          {isResCorrect ? 'Correct !' : 'Wrong answer'}
        </h2>
      </div>
    </div>
  );
};

export default AnswerResponse;
