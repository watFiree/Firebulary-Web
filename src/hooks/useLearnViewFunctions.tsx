import { useState } from 'react';
import useAnsweredCorrectly from './useAnsweredCorrectly';

const useLearnViewFunctions = (
  dictionaryIndex: number,
  correctAnswer: string,
  setNextView: () => void
): [(answer: string) => void, boolean | undefined, boolean, boolean, () => void] => {
  const answeredCorrectly = useAnsweredCorrectly();

  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>();
  const [isResultShown, setIsResultShown] = useState(false);
  const [responsePopover, setResponsePopover] = useState(false);

  const showPopover = () => {
    setResponsePopover(true);
    setTimeout(() => setResponsePopover(false), 1000);
  };

  const handleCheck = (answer: string) => {
    if (!isResultShown && answer === correctAnswer) {
      answeredCorrectly(dictionaryIndex);
      setIsAnswerCorrect(true);
      setNextView();
    } else if (isResultShown && answer === correctAnswer) {
      setIsAnswerCorrect(true);
      setNextView();
    } else {
      setIsAnswerCorrect(false);
    }
    showPopover();
  };

  const showResult = () => setIsResultShown(true);

  return [handleCheck, isAnswerCorrect, responsePopover, isResultShown, showResult];
};

export default useLearnViewFunctions;
