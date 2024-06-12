import React from 'react';
import { FaHome, FaFire, FaYoutube, FaRegBookmark, FaHistory, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const open = useSelector((state) => state.app.open);


  const sidebar = [
    {
      name: 'Home',
      icon: <FaHome />
    },
    {
      name: 'Trending',
      icon: <FaFire />
    },
    {
      name: 'Subscriptions',
      icon: <FaYoutube />
    },
    {
      name: 'Library',
      icon: <FaRegBookmark />
    },
    {
      name: 'History',
      icon: <FaHistory />
    },
    {
      name: 'Settings',
      icon: <FaCog />
    },
    {
      name: 'Help',
      icon: <FaQuestionCircle />
    },
    {
      name: 'Logout',
      icon: <FaSignOutAlt />
    },

    {
      name: 'Home',
      icon: <FaHome />
    },
    {
      name: 'Trending',
      icon: <FaFire />
    },
    {
      name: 'Subscriptions',
      icon: <FaYoutube />
    },
    {
      name: 'Library',
      icon: <FaRegBookmark />
    },
    {
      name: 'History',
      icon: <FaHistory />
    },
    {
      name: 'Settings',
      icon: <FaCog />
    },
    {
      name: 'Help',
      icon: <FaQuestionCircle />
    },
    {
      name: 'Logout',
      icon: <FaSignOutAlt />
    },

    {
      name: 'Home',
      icon: <FaHome />
    },
    {
      name: 'Trending',
      icon: <FaFire />
    },
    {
      name: 'Subscriptions',
      icon: <FaYoutube />
    },
    {
      name: 'Library',
      icon: <FaRegBookmark />
    },
    {
      name: 'History',
      icon: <FaHistory />
    },
    {
      name: 'Settings',
      icon: <FaCog />
    },
    {
      name: 'Help',
      icon: <FaQuestionCircle />
    },
    {
      name: 'Logout',
      icon: <FaSignOutAlt />
    },
  ];

  return (
    <div className={`w-60 h-screen bg-gray-100 pt-5  overflow-y-scroll overflow-x-hidden shadow-md ${open ? '' : "hidden"} `}>
      {sidebar.map((item, index) => (
        <div key={index} className='flex items-center p-3 gap-3 cursor-pointer transition duration-300 hover:bg-gray-200'>
          {item.icon}
          <h1 className='text-lg text-gray-800'>{item.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
