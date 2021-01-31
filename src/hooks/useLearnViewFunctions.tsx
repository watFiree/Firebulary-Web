import { useState } from 'react';
import { functions } from 'fb';

const useLearnViewFunctions = (
  dictionaryIndex: number,
  correctAnswer: string,
  setNextView: () => void
): [(answer: string) => void, boolean | undefined, boolean, boolean, () => void] => {
  const answeredCorrectly = functions.httpsCallable('answeredCorrectly');

  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>();
  const [isResultShown, setIsResultShown] = useState(false);
  const [responsePopover, setResponsePopover] = useState(false);

  const showPopover = () => {
    setResponsePopover(true);
    setTimeout(() => setResponsePopover(false), 1000);
  };

  const handleCheck = async (answer: string) => {
    if (!isResultShown && answer === correctAnswer) {
      setIsAnswerCorrect(true);
      showPopover();
      setNextView();
      await answeredCorrectly(dictionaryIndex);
    } else if (isResultShown && answer === correctAnswer) {
      setIsAnswerCorrect(true);
      showPopover();
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
