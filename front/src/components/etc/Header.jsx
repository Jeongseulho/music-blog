import React from 'react';
import { Link } from 'react-router-dom';
import useHeader from '../../hooks/useComponents/useHeader';
import SetIpPopup from './SetIpPopup';

function Header() {
  const { modalPopup, setModalPopup, currentUserIp, location } = useHeader();

  return location.pathname === '/admin' ? null : (
    <nav className=" px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-black">
            music-blog
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <Link to="/add-post">
            <button
              type="button"
              className="w-full rounded-full  bg-blue-600 py-4 px-6 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  focus:ring-offset-blue-200"
            >
              글 작성하기
            </button>
          </Link>
        </div>

        <div className=" w-full md:block md:w-auto" id="navbar-default">
          <div className=" mt-4 duration-500">
            <button
              type="button"
              onClick={() => {
                setModalPopup(true);
              }}
              className="w-full rounded-lg  bg-indigo-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
            >
              내 IP 설정하기
            </button>
          </div>
          <p>{`현재 내 ip 주소 : ${currentUserIp}`}</p>
        </div>
        <Link to="/admin">
          <button
            type="button"
            className=" items-center justify-center rounded-lg  bg-red-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2  focus:ring-offset-red-200 "
          >
            관리자 페이지
          </button>
        </Link>
      </div>
      {modalPopup && <SetIpPopup setModalPopup={setModalPopup} />}
    </nav>
  );
}

export default Header;
