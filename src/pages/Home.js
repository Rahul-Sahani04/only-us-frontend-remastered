import toast, { Toaster } from "react-hot-toast";
import ChatComponent from "../components/ChatsContainerComponent";
import { SideBar } from "../components/StrangersSideBar";
import { UserSideBar } from "../components/UserSideBar";
import React, { useEffect, useRef, useState } from "react";

import socketIo from "socket.io-client";

import { useNavigate } from "react-router-dom";

const ENDPOINT = "http://localhost:4500/";

let user = "";

let socket;

function Home() {
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState("");

  const [connectPopup, setConnectPopup] = useState(false);

  const sendButton = useRef(null);
  const chatInput = useRef(null);

  const [id, setId] = useState("");
  const [targetId, setTargetId] = useState("");

  const [OtherUser, setOtherUser] = useState({
    userDetails: "Anonymous",
  });


  const sendMessage = () => {
    if (messages) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendButton.current.click();
    }
  };

  const send = () => {
    socket.emit("message", { user, message, id, targetId });
    setMessage("");
    setMessages((prevMessages) => [
      ...prevMessages,
      { user : "user", message },
    ]);
  };


  const navigate = useNavigate();
  
  const findUser = () => {
    socket.emit("findUser", localStorage.getItem("auth-Token"));
    setMessages((prevMessages) => [
      { user : "user", message: "Finding a user", system: true },
    ]);
  };

  useEffect(() => {

    if (localStorage.getItem("email")) {
      console.log(localStorage.getItem("email"));
    } else {
      navigate("/");
    }
  } ,[]);

  // Get other user's details using 
  const getOtherUserDetails = async (targetId) => {
    const response = await fetch(process.env.REACT_APP_API_URL + `/api/auth/getUser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-Token": localStorage.getItem("auth-Token"),
      },
      // body: JSON.stringify({ socketId: targetId }),
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log("Strange user details", data);
      setOtherUser(data);
    }
  };

  // Send a request to add the other user as a friend
  const addFriend = async () => {
    const response = await fetch(process.env.REACT_APP_API_URL + `/api/auth/addFriendPopUp`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-Token": localStorage.getItem("auth-Token"),
      },
      body: JSON.stringify({ socketId: targetId }),
    });

    if (response.status === 200) {
      toast.success("Friend request sent successfully");
    }
  };

  const acceptFriend = async () => {
    try {
      const authToken = localStorage.getItem('auth-Token');
      const response = await fetch('http://localhost:5004/api/auth/acceptFriend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-Token': authToken,
        },
      });
  
      const result = await response.json();
  
      if (response.status === 200) {
        console.log('Friend request accepted:', result.userDetails);
        // You can add additional logic here to update the UI or state as needed
        toast.success('Friend request accepted');
        setConnectPopup(false);
      } else {
        console.log('Error:', result.message);
        toast.error("Error: ", result.message);
      }
    } catch (error) {
      console.error('Error accepting friend request:', error);
      toast.error('Error accepting friend request');
    }
  };


  const disconnectSelf = async () => {

      const response = await fetch('http://localhost:5004/api/auth/disconnectUser', {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "auth-Token": localStorage.getItem("auth-Token")
        },
        body: JSON.stringify({ socketId: socket.id })
      });

      if (response.status === 200) {
        console.log("Status updated successfully");
        socket.disconnect();
        
        // navigate("/");
      }
  };



  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });
  
    
    socket.on("connect", () => {
      console.log("connected");
      const id = socket.id;
      setId(id);
      console.log("My ID: ", socket.id);
  
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

      setTargetId(data);

      // Get the other user's details
      getOtherUserDetails();
    });
  
    socket.on("leave", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log("User left", data.user, data.message);
    });
  
    socket.on("sendMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);

    });

    // Send a message to the other user that someone wants to connect with them
    socket.on("friendRequest", (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user : "Anony", message: "User wants to connect with you", system: true },
      ]);
      setConnectPopup(true);
    });



    socket.on("connected", (data) => {
      console.log("Connected with user", data);
      setTargetId(data.targetId);
      getOtherUserDetails();
    })
  
    socket.on("matchedUser", (data) => {
      const targetId = data;
      setTargetId(targetId);
      console.log("Found a match", data);

      // Send a message to the other user that someone connected with them
      socket.emit("sendMessage", { user, message: "Found a match", id: socket.id, targetId: data, system: true});

      socket.emit("connectionEstablished", { id: socket.id, targetId: targetId });

      getOtherUserDetails();

      setMessages((prevMessages) => [
        ...prevMessages,
        { user : "Anony", message: "Found a match", system: true },
      ]);
    });
  
    return () => {
      socket.disconnect();
    };
  }, []);

  
  return (
    <div className="App">
      <Toaster />
      <SideBar socket={socket} findUser={findUser}  disconnectSelf={disconnectSelf} OtherUser={OtherUser} connectPopup={connectPopup} addFriend={addFriend} acceptFriend={acceptFriend} />

      <ChatComponent
        messages={messages}
        socket={socket}
        user={user}
        sendMessage={send}
        handleKeyDown={handleKeyDown}
        message={message}
        setMessage={setMessage}
        sendButton={sendButton} 
        targetId={targetId}
        chatInput={chatInput}
      />
      <UserSideBar  socket={socket} />
    </div>
  );
}

export default Home;
