import React from "react";
import SendMessage from "./SendMessage";
import "../css/chatComponent.css"

const ChatComponent = () => {
  return (
    <div className="chat_component">
      <div className="chat-screen  w-full">ChatComponent</div>
      <div className="sendMessage_container d-flex">
        <SendMessage />
      </div>
    </div>
  );
};

export default ChatComponent;
