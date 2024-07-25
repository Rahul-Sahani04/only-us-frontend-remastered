import ChatComponent from "../components/ChatsContainerComponent";
import { SideBar } from "../components/StrangersSideBar";
import { UserSideBar } from "../components/UserSideBar";
import React, { useEffect, useState } from "react";

import socketIo from "socket.io-client";

const ENDPOINT = "http://localhost:4500/";

let user = "";

let socket;

function Home() {
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState("");

  const [id, setId] = useState("");
  const [targetId, setTargetId] = useState("");


//   const getUserDetails = async() => {
//     try {
        
//         const res = await fetc
//     } catch (error) {
        
//     }
//   }


  const sendMessage = () => {
    if (messages) {
      setMessages([...messages, messages]);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { user, message, id, targetId });
    document.getElementById("chatInput").value = "";

    setMessages((prevMessages) => [
      ...prevMessages,
      { user : "user", message },
    ]);
  };



  const findUser = () => {
    socket.emit("findUser", localStorage.getItem("auth-Token"));
  };

  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });

    // Automatically disconnects the socket when the component unmounts or when the page is closed
    socket.on("disconnect", () => {
      console.log("disconnected");

      socket.emit("leave", {
        user: user,
        authToken: localStorage.getItem("auth-Token"),
      });
    });


    socket.on("connect", () => {
      console.log("connected");
      setId(socket.id);
      console.log(socket.id);

      socket.emit("joined", {
        user: user,
        authToken: localStorage.getItem("auth-Token"),
      });
    });

    socket.on("welcome", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log(data.user, data.message);
    });

    socket.on("userJoined", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log(data.user, data.message);
    });

    socket.on("leave", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log(data.user, data.message);
    });

    socket.on("sendMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on("matchedUser", (data) => {
      setTargetId(data);
      console.log("Found a match", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="App">
      <UserSideBar />
      <ChatComponent
        messages={messages}
        socket={socket}
        user={user}
        sendMessage={send}
        handleKeyDown={handleKeyDown}
        message={message}
        setMessage={setMessage}
      />
      <SideBar socket={socket} findUser={findUser} />
    </div>
  );
}

export default Home;
