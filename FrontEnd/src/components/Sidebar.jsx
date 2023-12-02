import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { PiArchiveDuotone } from "react-icons/pi";
import { FaListCheck, FaList } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import { SlLogout } from "react-icons/sl";
import { Link } from "react-router-dom";
import DetailTask from "./DetailTask";
import { DetailContext } from "../context/DetailContext";

const ListMenu = [
  {
    name: "Today",
    logo: <TfiWrite className="text-xl fill-logo" />,
    link: "/",
    menu: true,
  },
  {
    name: "All Todo",
    logo: <FaList className="text-xl fill-logo" />,
    link: "/alltodo",
    menu: true,
  },
  {
    name: "Completed",
    logo: <FaListCheck className="text-xl fill-logo" />,
    link: "/completed",
    menu: true,
  },
  {
    name: "Archived",
    logo: <PiArchiveDuotone className="text-xl fill-logo" />,
    link: "/archived",
    menu: true,
  },
  {
    name: "Profile",
    logo: <VscAccount className="text-xl text-logo" />,
    link: "/profile",
    menu: false,
  },
];

const Sidebar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [menuActive, setMenuActive] = useState(0);

  const { openDetail, setOpenDetail } = useContext(DetailContext);

  const handleClickCloseDetail = () => {
    setOpenDetail(false);
  };

  const handleClickSideBar = (e) => {
    e.preventDefault();
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSidebarOpen(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [menuActive]);

  return (
    <div className="flex h-screen">
      <div
        className={`bg-primary flex flex-col h-screen relative px-5 pt-8 transition-all duration-500 ${
          sidebarOpen && window.innerWidth <= 500
            ? "w-screen"
            : sidebarOpen && window.innerWidth >= 500
            ? "w-60"
            : "w-20"
        }`}>
        <button
          className="absolute border-none cursor-pointer top-9 -right-3 duration-200 focus:border-none "
          onClick={handleClickSideBar}>
          {sidebarOpen ? (
            <IoMdArrowDropleft className="text-3xl text-primary bg-white rounded-full" />
          ) : (
            <IoMdArrowDropright className="text-3xl text-primary bg-white rounded-full" />
          )}
        </button>

        <div className="flex items-center gap-x-3">
          <Link to="/" onClick={() => setMenuActive(0)}>
            <GoChecklist className="text-4xl fill-logo" />
          </Link>
          <h1
            className={`text-2xl font-medium text-secondary origin-left duration-200 ${
              !sidebarOpen && "scale-0"
            }`}>
            Todo List
          </h1>
        </div>

        <ul className="flex-1 flex flex-col gap-7 pt-10">
          {ListMenu.map((value, index) => {
            if (value.menu === true) {
              return (
                <li key={index}>
                  <Link
                    to={value.link}
                    className={`flex items-center gap-x-2 p-2 cursor-pointer rounded-md bg-opacity-50 hover:bg-white hover:bg-opacity-50 ${
                      menuActive === index ? "bg-white " : "bg-transparent"
                    }`}
                    onClick={() => setMenuActive(index)}>
                    {value.logo}
                    <span
                      className={`text-lg text-secondary font-normal origin-left duration-200 hover:font-semibold ${
                        !sidebarOpen && "hidden"
                      }`}>
                      {value.name}
                    </span>
                  </Link>
                </li>
              );
            }
          })}
        </ul>

        <ul className="flex flex-col gap-3 pb-5">
          {ListMenu.map((value, index) => {
            if (value.menu === false) {
              return (
                <li key={index}>
                  <Link
                    to={value.link}
                    className={`flex items-center gap-x-2 p-2 cursor-pointer rounded-md bg-opacity-50 hover:bg-white hover:bg-opacity-50 ${
                      menuActive === index ? "bg-white " : "bg-transparent"
                    }`}
                    onClick={() => setMenuActive(index)}>
                    {value.logo}
                    <span
                      className={`text-lg text-secondary font-normal origin-left duration-200 hover:font-semibold ${
                        !sidebarOpen && "hidden"
                      }`}>
                      {value.name}
                    </span>
                  </Link>
                </li>
              );
            }
          })}

          <li>
            <button
              className={`flex w-full items-center gap-x-2 p-2 cursor-pointer rounded-md bg-opacity-50 hover:bg-white hover:bg-opacity-50`}>
              <SlLogout className="text-xl fill-logo" />
              <span
                className={`text-lg text-secondary font-normal origin-left duration-200 hover:font-semibold ${
                  !sidebarOpen && "hidden"
                }`}>
                Logout
              </span>
            </button>
          </li>
        </ul>
      </div>

      <div
        className={`flex-1 h-screen overflow-auto transition-all duration-500 ${
          sidebarOpen && window.innerWidth <= 500
            ? "invisible p-8"
            : sidebarOpen && window.innerWidth >= 500
            ? "visible"
            : "visible"
        }`}>
        {children}
      </div>

      <div
        className={`bg-white min-h-screen lg:shadow-md lg:shadow-primary ${
          openDetail && window.innerWidth <= 1000
            ? "visible w-full"
            : openDetail && window.innerWidth > 1000
            ? "visible w-4/12"
            : "hidden"
        }`}>
        <DetailTask handleClose={handleClickCloseDetail} />
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Sidebar;
