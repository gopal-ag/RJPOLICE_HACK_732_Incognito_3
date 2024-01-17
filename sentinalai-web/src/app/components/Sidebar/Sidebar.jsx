import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = ({ active }) => {
  return (
    <>
      <div
        className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-[#1a1a1a]"
      >
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <Image src={"/rj_police_logo.png"} width={100} height={100} alt='logo' />
              <h1 className="font-bold text-gray-200 text-[15px] ml-3 text-xl">Sentinel AI</h1>
              <i
                className="bi bi-x cursor-pointer ml-28 lg:hidden"
                // onclick="openSidebar()"
              ></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          {/* <div
        className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
      >
        <i className="bi bi-search text-sm"></i>
        <input
          type="text"
          placeholder="Search"
          className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
      </div> */}
          <Link
            href={'/itms'}
            className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${active === "itms" ? 'bg-gray-700' : ''} hover:bg-gray-700 text-white`}
          >
            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">ITMS</span>
          </Link>
          <Link
            href={'/weapon'}
            className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${active === "weapon" ? 'bg-gray-700' : ''} hover:bg-gray-700 text-white`}
          >
            <i className="bi bi-bookmark-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Weapon Detection</span>
          </Link>
          <Link
            href={'/lostandfound'}
            className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${active === "lostandfound" ? 'bg-gray-700' : ''} hover:bg-gray-700 text-white`}
          >
            <i className="bi bi-bookmark-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Lost and Found</span>
          </Link>
          <Link
            href={'/violence'}
            className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${active === "violence" ? 'bg-gray-700' : ''} hover:bg-gray-700 text-white`}
          >
            <i className="bi bi-bookmark-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Violence Detection</span>
          </Link>
          <Link
            href={'/vandalism'}
            className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${active === "vandalism" ? 'bg-gray-700' : ''} hover:bg-gray-700 text-white`}
          >
            <i className="bi bi-bookmark-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Vandalism</span>
          </Link>
          <div
            className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white`}
          >
            <i className="bi bi-bookmark-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Face Generation</span>
          </div>
          <div className="my-4 bg-gray-600 h-[1px]"></div>
          <div
            className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${active === "" ? 'bg-gray-700' : ''} hover:bg-gray-700 text-white`}
            // onclick="dropdown()"
          >
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">Settings</span>
              <span className="text-sm rotate-180" id="arrow">
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          <div
            className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${active === "" ? 'bg-gray-700' : ''} hover:bg-gray-700 text-white`}
          >
            <i className="bi bi-box-arrow-in-right"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
          </div>
        </div>
      </>
  )
}

export default Sidebar