import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10  object-contain " />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Nura Azam
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks?.map((item) => (
            <li
              key={item?.id}
              className={`${
                active === item?.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(item?.title)}
            >
              <a href={`#${item?.id}`}>{item?.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={isOpened ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setIsOpened((p) => !p)}
          />
          <div
            className={`${
              !isOpened ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start ">
              {navLinks?.map((item) => (
                <li
                  key={item?.id}
                  className={`${
                    active === item?.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[16px] font-poppins font-medium cursor-pointer`}
                  onClick={() => {
                    setIsOpened((p) => !p);
                    setActive(item?.title);
                  }}
                >
                  <a href={`#${item?.id}`}>{item?.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
