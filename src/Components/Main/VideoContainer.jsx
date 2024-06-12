import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import axios from 'axios';
import { YOUTUBE_VODEO_API, API_KEY } from '../Constant/Youtube';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVideo } from '../../utils/appSlice';


const VideoContainer = () => {
  const dispatch = useDispatch();

  const { open, video, category } = useSelector((state) => state.app);

  const fetchYoutubeVideos = async () => {
    try {
      const res = await axios.get(YOUTUBE_VODEO_API);
      dispatch(setVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoByCategory = async (category) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`
      );
      dispatch(setVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchYoutubeVideos();
    if (category) {
      fetchVideoByCategory(category);
    }
  }, [category]);

  return (
    <div className='flex gap-6 flex-wrap mx-9 my-6'>
      {video.map((item) => (
        <Link key={item.id.videoId} to={`/watch?v=${item.id.videoId}`}>
          <div className={`border ${open ? 'w-[380px]' : 'w-[340px]'} rounded-md`}>
            <img
              className='w-full h-[180px] rounded-t-md object-cover'
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
            <div className='p-3'>
              <div className='flex items-center gap-3'>
                <Avatar
                  src={item.snippet.thumbnails.medium.url}
                  className="rounded-full cursor-pointer"
                  size="34px"
                />
                <h1 className='font-bold text-sm'>{item.snippet.title}</h1>
              </div>
              <p className='text-sm text-gray-500'>{item.snippet.channelTitle}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
