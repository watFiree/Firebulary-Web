import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import dataState from 'state/data';

import Heading from 'components/SubViewHeading';
import LearnType from 'components/LearnViews/LearnType';
import LearnChoose from 'components/LearnViews/LearnChoose';

const Learn = () => {
  const { dictionary } = useRecoilValue(dataState);
  const [view, setView] = useState(0);
  const handleNextView = () => setView(prev => prev + 1);
  return (
    <div className="w-full h-full flex flex-col">
      <Heading label="Learn" />
      {view < dictionary.length ? (
        view % 2 ? (
          <LearnType data={dictionary[view]} index={view} setNextView={handleNextView} />
        ) : (
          <LearnChoose data={dictionary[view]} index={view} setNextView={handleNextView} />
        )
      ) : (
        <Redirect to="app" />
      )}
    </div>
  );
};

export default Learn;
