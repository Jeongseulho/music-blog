import React from 'react';
import { Link } from 'react-router-dom';
import useHeader from '../hooks/useComponents/useHeader';
import SetIpPopup from './SetIpPopup';

function Header() {
  const { modalPopup, setModalPopup, currentUserIp } = useHeader();
  return (
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
            <div className="mt-4 rounded-lg border border-gray-700 duration-500 hover:bg-gray-700">
              <button
                type="button"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:text-gray-100"
              >
                글 쓰기
              </button>
            </div>
          </Link>
        </div>

        <div className=" w-full md:block md:w-auto" id="navbar-default">
          <div className=" mt-4 rounded-lg border border-gray-700  duration-500 hover:bg-gray-700">
            <button
              type="button"
              onClick={() => {
                setModalPopup(true);
              }}
              className=" mx-auto block rounded py-2 pl-3 pr-4 text-gray-700 hover:text-gray-100"
            >
              내 IP 설정하기
            </button>
          </div>
          <p>{`현재 내 ip 주소 : ${currentUserIp}`}</p>
        </div>
      </div>
      {modalPopup && <SetIpPopup setModalPopup={setModalPopup} />}
    </nav>
  );
}

export default Header;
