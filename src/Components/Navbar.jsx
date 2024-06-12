import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import Avatar from "react-avatar";
import {  useDispatch } from 'react-redux'
import { setCategory, toggle } from "../utils/appSlice";


const Navbar = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch()

  const searchVideo = () => {
    dispatch(setCategory(input))
    setInput('');
  }

  const toggleHandler = () => {
    dispatch(toggle())
  }


  return (
    <div className="flex justify-between items-center border px-5 py-2 shadow-md fixed bg-white w-full ">
      <div className="flex gap-4 items-center">
        <GiHamburgerMenu onClick={toggleHandler} size={30} className="cursor-pointer" />
        <img
          className="w-[100px]"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="logo"
        />
      </div>
      <div className="border-2 rounded-full flex items-center w-[400px]  ">
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-[400px] h-10 outline-none mx-3 "
        />
        <IoIosSearch onClick={searchVideo} size={30} className="cursor-pointer hover:text-blue-700" />
      </div>
      <div className="flex gap-4 items-center ">
        <MdOutlineCreateNewFolder size={30} className="cursor-pointer"  />
        <IoIosNotifications size={30} className="cursor-pointer"  />
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJfQpO3v4NSrlVvMpFYWw7YjijzAKTbuXHg&s"
          className="rounded-full cursor-pointer "
          size="34px"
        />
      </div>
    </div>
  );
};

export default Navbar;
