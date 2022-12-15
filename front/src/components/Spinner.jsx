import React from 'react';
import spinner from '../assets/spinner.svg';

function Spinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-50">
      <div>
        <img src={spinner} alt="Loading..." className="h-24" />
      </div>
    </div>
  );
}

export default Spinner;
