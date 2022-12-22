import React from 'react';
import MyResponsiveBump from './MyResponsiveBump';
import useAnalysis from '../../hooks/useComponents/useAnalysis';

function Analysis() {
  const data = useAnalysis();

  return (
    <div className="relative left-24 mt-24 h-[70vh] w-[70%]">
      <MyResponsiveBump data={data} />
    </div>
  );
}

export default Analysis;
