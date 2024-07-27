/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ksxqI8OzWpe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Input } from "../raw_components/raw_input";
import { Button } from "../raw_components/ButtonVariants";
import { ChatMessageContainer } from "./ChatComponent";
import React from "react";



import { useEffect, useState } from "react";



export default function ChatComponent({ socket, user, targetId, messages, setMessage, message, sendMessage, handleKeyDown, sendButton, chatInput }) {



  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background text-foreground">
      <div className="flex w-full h-full max-w-3xl flex-col gap-6 rounded-lg border bg-[#999999] p-6 shadow-lg md:flex-row">
        <div className="flex-1 rounded-lg border bg-card p-4 shadow-sm ">
          <div className="flex min-h-[90%] max-h-[90%] flex-col gap-4 overflow-y-scroll p-4 ">
            {/* <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary-foreground px-3 py-2 text-sm text-primary ">
                <ChatMessageContainer
                  message={"Hey there! How's it going?"}
                  user={"anony"}
                />
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="rounded-full bg-secondary-foreground px-3 py-2 text-sm text-secondary">
                <ChatMessageContainer
                  message={"Pretty good, thanks for asking! How about you?"}
                  user={"user"}
                />
              </div>
            </div> */}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-4  ${msg.user === "user" ? "justify-end" : "justify-start"}`}
              >
                {
                  !msg.system ? (
                <div className="rounded-full bg-secondary-foreground px-3 py-2 text-sm text-secondary">
                  <ChatMessageContainer message={msg.message} user={msg.user} />
                </div>
                  ) : (
                    <>
                      <p className="w-full text-center text-sm text-black underline">System: {msg.message}</p>
                    </>
                  )
                }
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 backdrop-blur-lg">
            <Input
              placeholder={targetId ? "Type your message..." : "Connect with someone to start chatting.."}
              className="flex-1 rounded-full bg-muted px-4 py-2 text-sm "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              id="chatInput"
              disabled={!targetId}

            ref={chatInput}
            />
            <Button variant="primary" size="icon" className="rounded-full" 
              onClick={sendMessage}
              ref={sendButton}
            >
              <SendIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
