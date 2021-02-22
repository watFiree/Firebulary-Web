import { useEffect, useState } from 'react';
import { functions } from 'fb';

const useLearnViewFunctions = (
  indexInDictionary: number,
  correctAnswer: string,
  setNextWord: () => void
) => {
  const updateWordFunction = functions.httpsCallable('answeredCorrectly');
  const [answer, setAnswer] = useState('');
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [responsePopover, setResponsePopover] = useState(false);
  const [usedHint, setUsedHint] = useState(false);

  useEffect(() => {
    setAnswer('');
    setUsedHint(false);
  }, [indexInDictionary]);

  const showPopover = (isResponseCorrect: boolean) => {
    setAnsweredCorrectly(isResponseCorrect ? true : false);
    setResponsePopover(true);
    setTimeout(() => setResponsePopover(false), 1000);
  };

  const useHint = () => setUsedHint(true);

  const handleCheckAnswer = async () => {
    if (answer.trim() === correctAnswer) {
      showPopover(true);
      setTimeout(setNextWord, 1000);
      if (!usedHint) {
        return await updateWordFunction(indexInDictionary);
      }
      return;
    }
    return showPopover(false);
  };

  return [
    handleCheckAnswer,
    answer,
    setAnswer,
    usedHint,
    useHint,
    answeredCorrectly,
    responsePopover,
  ] as const;
  // const answeredCorrectly = functions.httpsCallable('answeredCorrectly');

  // const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  // const [isResultShown, setIsResultShown] = useState(false);
  // const [responsePopover, setResponsePopover] = useState(false);

  // const showPopover = () => {
  //   setResponsePopover(true);
  //   setTimeout(() => setResponsePopover(false), 1000);
  // };

  // const handleCheck = async (answer: string) => {
  //   if (!isResultShown && answer === correctAnswer) {
  //     setIsAnswerCorrect(true);
  //     showPopover();
  //     setNextView();
  //     await answeredCorrectly(dictionaryIndex);
  //   } else if (isResultShown && answer === correctAnswer) {
  //     setIsAnswerCorrect(true);
  //     showPopover();
  //     setNextView();
  //   } else {
  //     setIsAnswerCorrect(false);
  //   }
  //   showPopover();
  // };

  // const showResult = () => setIsResultShown(true);

  // return [handleCheck, isAnswerCorrect, responsePopover, isResultShown, showResult];
};

export default useLearnViewFunctions;
