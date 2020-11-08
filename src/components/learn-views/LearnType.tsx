import React, { useState } from 'react';
import { LearnViewProps } from 'utils/types';
import useAnsweredCorrectly from 'hooks/useAnsweredCorrectly';

const LearnType: React.FC<LearnViewProps> = ({ data, index, setNextView }) => {
  const [showResult, setShowResult] = useState(false);
  const [answer, setAnswer] = useState('');
  const [skip, setSkip] = useState(false);
  const answeredCorrectly = useAnsweredCorrectly();

  const handleCheck = () => {
    if (!skip && !showResult && answer === data.translation) {
      answeredCorrectly(index);
      setNextView();
    } else if (skip || (showResult && answer === data.translation)) {
      setNextView();
    } else {
      setSkip(true);
    }
  };
  return (
    <>
      <h1>Firebulary</h1>
      <div>
        <p>{data.word}</p>
        {showResult ? <p>{data.translation}</p> : null}
      </div>
      <input name="answer" onChange={e => setAnswer(e.target.value)} />
      {skip ? <p>Wrong answer !</p> : null}
      {showResult ? null : <button onClick={() => setShowResult(true)}>show word</button>}
      <button onClick={handleCheck}>{skip ? 'skip' : 'check'}</button>
    </>
  );
};

export default LearnType;
