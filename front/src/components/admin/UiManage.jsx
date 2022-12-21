import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from '../../redux/darkModeSlice';

function UiManage() {
  const dispatch = useDispatch();
  return (
    <div className="relative left-36 flex items-center justify-center">
      <label className="relative flex w-max cursor-pointer select-none items-center">
        <span className="mr-3 text-lg font-bold">Dark Mode Toggle</span>
        <input
          onClick={() => {
            dispatch(toggle());
          }}
          type="checkbox"
          className="h-7 w-14 cursor-pointer appearance-none rounded-full bg-red-500 transition-colors focus:outline-none focus:ring-2 "
        />
        <span className="absolute right-1 text-xs font-medium uppercase text-white"> OFF </span>
        <span className="absolute right-8 text-xs font-medium uppercase text-white"> ON </span>
        <span className="absolute right-7 h-7 w-7 rounded-full bg-gray-200 transition-transform" />
      </label>
    </div>
  );
}

export default UiManage;
