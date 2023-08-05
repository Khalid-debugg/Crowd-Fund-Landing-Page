import React, { useRef, useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const page = useRef(null);
  return (
    <>
      <nav className="bg-gradient-to-b from-black text-white flex justify-between py-7 md:px-40 px-10">
        {/* header */}
        <header className="z-10">
          <a href="#" className="font-bold text-2xl">
            crowdfund
          </a>
        </header>

        {/* links  */}
        <ul className="hidden mobile:flex">
          <li className="mx-3">
            <a href="#">About</a>
          </li>
          <li className="mx-3">
            <a href="#">Discover</a>
          </li>
          <li className="mx-3">
            <a href="#">Get Started</a>
          </li>
        </ul>
        {!mobileMenu ? (
          <>
            {/* burger menu */}
            <button
              className="mobile:hidden z-10"
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
            >
              <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fill-rule="evenodd">
                  <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
                </g>
              </svg>
            </button>
          </>
        ) : (
          <>
            {/* cross icon */}
            <button
              className="mobile:hidden z-10"
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
            >
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fill-rule="evenodd">
                  <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
                  <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
                </g>
              </svg>
            </button>
          </>
        )}
      </nav>
      {/* mobile menu  */}
      {mobileMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center  transition-opacity duration-300">
          <ul className="gray2xl bg-white fixed top-28 flex flex-col p-4 w-3/4 rounded font-medium">
            <li className="border-b p-2 border-gray-2p-2 00">
              <a href="#">About</a>
            </li>
            <li className="border-b p-3 border-gray-200">
              <a href="#">Discover</a>
            </li>
            <li className="p-3 ">
              <a href="#">Get Started</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
