import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Main/Sidebar";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../Components/Constant/Youtube";
import Avatar from "react-avatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSendOutline } from "react-icons/io5";
import LiveChat from "../Components/LiveChat";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/ChatSlice";

const Watch = () => {
  const [input, setInput] = useState('');
  const [singleVideo, setSingleVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  const fetchSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`
      );
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.error("Error fetching the video:", error);
    }
  };

  const sendMessage = () => {
    dispatch(addMessage({name: 'Zakarya', message: input}));
    setInput('');  
  }

  useEffect(() => {
    fetchSingleVideo();
  }, [videoId]);

  return (
    <div className="flex  pt-20">
      <Sidebar />
      <div className="">
        <div className="ml-6">
          <div className="w-[800px]">
            {videoId && (
              <iframe
                width="800"
                height="450"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
            <h1 className="font-bold">{singleVideo?.snippet?.title}</h1>
            <div className="flex items-center gap-3">
              <Avatar
                src={singleVideo?.snippet?.thumbnails.medium.url}
                className="rounded-full cursor-pointer"
                size="34px"
              />
              <p>{singleVideo?.snippet?.channelTitle}</p>
              <button className="font-semibold text-white bg-black px-2 rounded-full ml-6">Subscribed</button>
              <div className="flex items-center gap-3">
                <button className="px-3 py-1 mr-4 rounded-md bg-gray-300">Like</button>
                <button className="px-3 py-1 mr-4 rounded-md bg-gray-300">Dislike</button>
                <button className="px-3 py-1 mr-4 rounded-md bg-gray-300">Share</button>
                <button className="px-3 py-1 mr-4 rounded-md bg-gray-300">Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="border ml-6 w-[20%] h-fit p-3 ">
        <div className="flex justify-between items-center">
          <h1>Live Chat</h1>
          <BsThreeDotsVertical />
        </div>
        <div className="h-[70vh] mt-3 overflow-y-auto flex flex-col-reverse">
          <LiveChat />
        </div>
        <div className="flex items-center gap-2 border-t border-gray-500">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJfQpO3v4NSrlVvMpFYWw7YjijzAKTbuXHg&s"
            className="rounded-full cursor-pointer mt-3"
            size="34px"
          />
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input} 
            type="text"
            placeholder="send Message..."
            className="border-b border-gray-500 outline-none w-[70%] mt-4"
          />
          <IoSendOutline onClick={sendMessage} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Watch;
