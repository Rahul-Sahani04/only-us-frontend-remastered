"use client";

import React, { useState } from "react";

import { Button } from "../raw_components/ButtonVariants";

import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "../raw_components/raw_drawer";
import { ChatMessageContainer } from "./ChatComponent";
import { Input } from "../raw_components/raw_input";

import { SendIcon } from "../raw_components/raw_icons";

import axios from "axios";
import toast from "react-hot-toast";

export function ChatDrawer({ editOpen, showEdit, closeEdit, toUserId }) {
  const [userId, setUserId] = useState("");

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "This is the start of the conversation", user: "anony" },
  ]);
  const [targetId, setTargetId] = useState("");
  const chatInput = React.createRef();
  const sendButton = React.createRef();

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5004" + `/api/auth/getSelf`,
        {
          headers: {
            "auth-Token": localStorage.getItem("auth-Token"),
          },
        }
      );

      if (response.data.success) {
        setUserId(response.data.id);
        console.log("User: ", response.data);
        console.log("User ID: ", response.data.id === messages.from);
      }
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };

  const fetchMessages = async () => {
    try {
      console.log("toID: ", toUserId);
      // http://localhost:5004/api/messagingLogic/messages/66a3b2e1fb33960e6b9ddfed
      const response = await axios.get(
        "http://localhost:5004" + `/api/messagingLogic/messages/${toUserId}`,
        {
          headers: {
            "auth-Token": localStorage.getItem("auth-Token"),
          },
        }
      );

      if (response.data.success) {
        const originalMessages = response.data.messages;

        // Conditionally check if the user is the sender or receiver
        console.log("User is sender 0: ", originalMessages[0].from === userId);
        console.log("User is sender 1: ", originalMessages[1].from === userId);

        const mergedMessages = {
          _id: "merged",
          from: originalMessages[0].from,
          to: originalMessages[0].to,
          messages: [
            ...originalMessages[0].messages.map((msg) => ({
              ...msg,
              direction: originalMessages[0].from === userId ? "sent" : "received",
            })),
            ...originalMessages[1].messages.map((msg) => ({
              ...msg,
              direction: originalMessages[1].from === userId ? "sent" : "received",
            })),
          ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)), // Sort messages by timestamp,
          createdAt: originalMessages[0].createdAt,
          updatedAt: originalMessages[1].updatedAt,
          __v: 0,
        };

        setMessages(mergedMessages);
        console.log(response.data.messages);
      } else {
        console.log(response.data.message);
        toast.error(response.data.message);
        // setError(response.data.message);
      }
    } catch (err) {
      // setError('Error fetching messages');
      console.error("Error fetching messages:", err);
    }
  };

  const sendMessageToFriend = async () => {
    if (!message.trim()) return;

    try {
      console.log("targetId: ", targetId);
      const response = await axios.post(
        "http://localhost:5004/api/messagingLogic/message",
        { toId: targetId, text: message, direction: "sent" },
        {
          headers: {
            "auth-Token": localStorage.getItem("auth-Token"),
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        // setMessages(prevMessages => [...prevMessages, response.data.message]);
        fetchMessages();
        setMessage("");
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error("Error sending message");
      console.error("Error sending message:", err);
    }
  };

  const sendMessage = () => {
    sendMessageToFriend();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  React.useEffect(() => {
    fetchUser();
    if (toUserId) {
      setTargetId(toUserId);
      fetchMessages(toUserId);
    }

    return () => {
      setTargetId("");
      setMessages([]);
    };
  }, [toUserId]);

  // Fetch messages every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      fetchUser();
      fetchMessages();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <Drawer
          open={editOpen}
          onOpenChange={(modalOpened) => {
            if (!modalOpened) {
              closeEdit();
            }
          }}
        >
          <DrawerContent className="sm:max-w-lg">
            <DrawerHeader>
              <DrawerTitle>FriendList: {toUserId} </DrawerTitle>
              <DrawerDescription className="mt-1 text-sm">
                Since - 2024
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody className="h-4/6 border-primary ">
              <div className="flex min-h-full max-h-full flex-col gap-2 overflow-y-scroll p-4 ">

                {messages.messages &&
                  messages.messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 ${
                        msg.direction === "sent"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div className="rounded-full bg-secondary-foreground px-3 py-2 text-sm text-secondary">
                        <ChatMessageContainer
                          message={msg.text}
                          user={msg.direction === "sent" ? "user" : "Anony"}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </DrawerBody>
            <DrawerFooter className="mt-6 w-full">
              <div className="mt-0 flex items-center gap-2 backdrop-blur-lg w-full">
                <Input
                  placeholder={
                    targetId
                      ? "Type your message..."
                      : "Connect with someone to start chatting.."
                  }
                  className="flex-1 rounded-full bg-muted px-4 py-2 text-sm "
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  id="chatInput"
                  ref={chatInput}
                />
                <Button
                  variant="primary"
                  size="icon"
                  className="rounded-full"
                  onClick={sendMessage}
                  ref={sendButton}
                >
                  <SendIcon className="h-5 w-5" />
                </Button>
              </div>
            </DrawerFooter>
            <DrawerFooter className="mt-6 ">
              <DrawerClose asChild>
                <Button
                  className="mt-2 w-full sm:mt-0 sm:w-fit"
                  variant="secondary"
                >
                  Go back
                </Button>
              </DrawerClose>
              <Button className="w-full sm:w-fit" onClick={() => closeEdit()}>
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
