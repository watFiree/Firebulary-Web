import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import dataState from 'state/data';

import Heading from 'components/SubViewHeading';
import LearnTypeTerm from 'components/LearnViews/LearnTypeTerm';

const Learn = () => {
  const { dictionary } = useRecoilValue(dataState);
  const [view, setView] = useState(0);
  const handleNextView = () => setTimeout(() => setView(prev => prev + 1), 1000);
  return (
    <div className="w-full h-full flex flex-col relative">
      <Heading label="Learn" />
      {view < dictionary.length ? (
        <LearnTypeTerm data={dictionary[view]} index={view} setNextView={handleNextView} />
      ) : (
        <Redirect to="app" />
      )}
    </div>
  );
};

export default Learn;
