import { Button } from "../raw_components/ButtonVariants";
import { AvatarComponent } from "./Avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../raw_components/shacn_raw_card";

import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";

import {
  SettingsIcon,
  LogOutIcon,
  PowerIcon,
  SideIcons,
} from "../raw_components/raw_icons";

import { useNavigate } from "react-router-dom";
export const UserSideBar = ({socket}) => {
  
  const handleLogout = async () => {
    const response = await fetch(
      "http://localhost:5004/api/auth/logout",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-Token": localStorage.getItem("auth-Token"),
        },
        body: JSON.stringify({ socketId: socket.id }),
      }
    );

    if (response.status === 200) {
      console.log("Status updated successfully");
      socket.disconnect();
      navigate("/");
    }
    localStorage.clear();
    navigate("/");
  };
  const userEmail = localStorage.getItem("email");
  const navigate = useNavigate();

  const recentlyChatData = [
    {
      id: 1,
      name: "Amelia Cooper",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "Jane Doe",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 4,
      name: "John Smith",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 5,
      name: "Jane Smith",
      avatar: "/placeholder-user.jpg",
    },
  ];

  return (
    <Card className="w-full h-full max-w-xs border-0 shadow-lg text-black relative bg-[#999999]">
      <div className="flex flex-col items-center">
        <SideIcons className="w-5/6 h-16 " />
      </div>
      <ProfileCard
        user={{
          name: userEmail,
          email: "johnDoe@gmail.com",
          friends: 10,
          strangersMet: 5,
        }}
      />

      <CardContent className="p-6">
        <div className="flex flex-col items-center p-4 bg-[#C7C7C7] rounded-lg border border-[#000000]">
          <div className="grid gap-4">
            <div>
              <h4 className="mb-4 text-sm font-medium text-[16px] ">
                Recently Interacted Strangers
              </h4>
              <div className="grid gap-2 overflow-y-auto max-h-32">
                {recentlyChatData.map((chat) => (
                  <div
                    key={chat.id}
                    className="flex items-center text-sm rounded-md bg-[#ededed] p-1 pl-4"
                  >
                    {/* <AvatarComponent
                    src={chat.avatar}
                    fallbackSrc={chat.name?.split(" ").map((n) => n[0]).join("")}
                    alt={chat.name}
                    size={'8'}
                  /> */}
                    <span>{chat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full border-t p-6 flex justify-between absolute bottom-0">
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium"
          prefetch={false}
        >
          <SettingsIcon className="h-4 w-4" />
          Settings
        </Link>
        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="icon"
            className="rounded-full border-primary"
            onClick={() => handleLogout()}
          >
            <LogOutIcon className="h-4 w-4" />
            <span className="sr-only" >
              Log out
            </span>
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full">
            <PowerIcon className="h-4 w-4" />
            <span className="sr-only">End session</span>
          </Button>
        </div>
      </CardFooter>

      {/* <CardFooter className="w-full border-t p-6 flex justify-between absolute bottom-0">
      {/* Premium Button Section 
      <div className="mt-auto">
          <button className="flex items-center justify-center w-full p-4 mt-6 bg-[#333333] rounded-lg">
            <StarIcon className="w-6 h-6 mr-2" />
            Premium
          </button>
        </div>
      </CardFooter> */}
    </Card>
  );
};
