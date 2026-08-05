import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-white border-b border-gray-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl font-bold text-gray-900 hover:bg-gray-50">
          🔥 DevTinder
        </a>
      </div>
      <div className="flex gap-2">
        <div className="dropdown dropdown-end mx-5">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar ring-2 ring-gray-200 hover:ring-gray-300 transition-all"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white rounded-xl z-10 mt-3 w-52 p-2 shadow-lg border border-gray-100"
          >
            <li>
              <a className="justify-between text-gray-700 hover:bg-gray-50">
                Profile
                <span className="badge badge-sm bg-primary/10 text-primary border-0">
                  New
                </span>
              </a>
            </li>
            <li>
              <a className="text-gray-700 hover:bg-gray-50">Settings</a>
            </li>
            <li>
              <a className="text-red-500 hover:bg-red-50">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;