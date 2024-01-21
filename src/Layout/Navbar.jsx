import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { modalFunc, openModal } from "../redux/modalSlice";
import Modal from "../Components/Modal/Modal";
export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const { modal } = useSelector((state) => state.modal);
  console.log(modal, "modal");
  const dispatch = useDispatch();
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="bg-white h-24 z-50 border-b-[2px] border-b-gray-200">
      <div className="flex justify-between h-full items-center sm:max-w-[1280px] md:max-w-[1440px] mx-auto">
        <div className="flex justify-center gap-2 items-center p-3 ">
          <FaBars
            size={20}
            onClick={toggleNav}
            className="flex items-center cursor-pointer sm:hidden"
          />
          {navOpen && (
            <div
              className="fixed top-0 left-0 w-full z-10 h-full bg-black/50 "
              onClick={toggleNav}
            ></div>
          )}
          <div
            className={`fixed bg-white z-50 h-screen w-3/4 top-0 right-0 transform ${
              navOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform ease-in-out duration-300`}
          >
            <div className="flex items-end p-4">
              <IoClose
                onClick={toggleNav}
                size={30}
                className="cursor-pointer"
              />
            </div>
            <ul className="flex flex-col items-center font-medium text-2xl mt-20 gap-4">
              <li>Home</li>
              <li>Products</li>
              <li>Shop</li>
              <li>Blog</li>
            </ul>
          </div>
          <Link to={"/"} className="sm:text-2xl text-xl font-bold md:text-4xl">
            3legant.
          </Link>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex items-center p-3 text-sm md:text-lg font-medium cursor-pointer gap-4 md:gap-10">
            <li>Home</li>
            <li>Products</li>
            <li>Shop</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="p-3 flex items-center gap-3 sm:gap-4">
          <CiSearch
            onClick={() => dispatch(modalFunc())}
            size={22}
            className="cursor-pointer"
          />
          <div className="">
            {modal && <Modal title={"Product Search"} />}
            {modal && (
              <div className="fixed top-0 left-0 w-full z-10 h-full bg-black/50 "></div>
            )}
          </div>
          <Link to={"/cart"}>
            <BsBag size={22} className="cursor-pointer " />
          </Link>
          <div className="relative inline-block text-left">
            <CiUser
              size={22}
              className="cursor-pointer"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            />
            {userMenuOpen && (
              <div className="origin-top-right z-10 cursor-pointer absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-2 ring-black ring-opacity-5">
                <div className="py-1">
                  <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Login
                  </p>
                  <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Register
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
