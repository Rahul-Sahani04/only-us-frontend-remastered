import { Card } from "../raw_components/raw_chatCard";

export const ChatMessageContainer = ({ message, user }) => (
  <Card className={`mx-auto max-w-xs ${user !== "user" ? "!bg-[#7b7b7b]" : "!bg-[#545454]"}`}>
    <p className={"text-left"}> {message} </p>
  </Card>
);
