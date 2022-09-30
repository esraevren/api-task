import React from "react";

import { notif_icon, search_icon } from "./../utils/svg";

let userImg =
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

function Header() {
  return (
    <div className="items-center justify-between flex w-full space-x-4 pb-1 pt-4 px-3 border-b border-gray-400">
      {/* logo */}
      <div className="w-full flex md:space-x-2 md:pb-6 pb-2 items-center justify-center md:justify-start">
        <img
          className="md:w-12 md:h-12 w-10 h-10 "
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/dashboard-3919365-3246557.png"
          alt="logo"
        />
        <h1 className="self-center hidden md:inline md:font-bold md:text-xl text-md ">
          Mypage
        </h1>
      </div>

      {/* login */}
      <div className=" pb-6 pt-4 hidden md:flex items-center justify-end px-3 space-x-6 w-[50%]">
        <div>{search_icon}</div>
        <div>{notif_icon}</div>
        <img
          src={userImg}
          className="w-8 h-8 rounded-full object-center object-cover "
          alt="userimg"
        />
      </div>
    </div>
  );
}

export default Header;
