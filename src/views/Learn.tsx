import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import dataState from 'state/data';

import Layout from 'components/Layout';
import LearnType from 'components/learn-views/LearnType';
import LearnChoose from 'components/learn-views/LearnChoose';

const Learn = () => {
  const { dictionary } = useRecoilValue(dataState);
  const [view, setView] = useState(0);
  const handleNextWord = () => setView(prev => prev + 1);
  return (
    <Layout>
      {view < dictionary.length ? (
        view % 2 ? (
          <LearnType data={dictionary[view]} setNextWord={handleNextWord} />
        ) : (
          <LearnChoose data={dictionary[view]} setNextWord={handleNextWord} />
        )
      ) : (
        <h1>learn view</h1>
      )}
    </Layout>
  );
};

export default Learn;
