import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import dataState from 'state/data';

import LearnType from 'components/learn-views/LearnType';
import LearnChoose from 'components/learn-views/LearnChoose';

const Learn = () => {
  const { dictionary } = useRecoilValue(dataState);
  const [view, setView] = useState(0);
  const handleNextView = () => setView(prev => prev + 1);
  return (
    <>
      {view < dictionary.length ? (
        view % 2 ? (
          <LearnType data={dictionary[view]} index={view} setNextView={handleNextView} />
        ) : (
          <LearnChoose data={dictionary[view]} index={view} setNextView={handleNextView} />
        )
      ) : (
        <Redirect to="app" />
      )}
    </>
  );
};

export default Learn;
