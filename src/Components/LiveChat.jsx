import React, { useEffect } from "react";
import MessageChat from "./MessageChat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName, generateRandomText } from "../utils/Helper";

const LiveChat = () => {
  const message = useSelector((state) => state.chat.message);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(16),
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <div>
      {message.map((item, index) => (
        <MessageChat key={index} item={item} />
      ))}
    </div>
  );
};

export default LiveChat;
