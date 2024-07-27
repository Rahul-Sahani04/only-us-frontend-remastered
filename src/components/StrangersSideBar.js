import { Button } from "../raw_components/ButtonVariants";
import { AvatarFallback, Avatar } from "../raw_components/raw_avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../raw_components/shacn_raw_card";

import { SideIcons } from "../raw_components/raw_icons";

import { UserPlusIcon, BanIcon, AtSignIcon } from "../raw_components/raw_icons";

import ProfileCardStranger from "./ProfileCardStranger";
import { Cross1Icon } from "@radix-ui/react-icons";

  export const SideBar = ({ socket, findUser, disconnectSelf, OtherUser, connectPopup, addFriend, acceptFriend }) => {
    // const userEmail = localStorage.getItem("email");

    
    


    return (
      <div className="relative flex w-1/3 h-full flex-col items-center gap-4 rounded-lg border bg-[#999999] p-4 pt-1 shadow-sm">
        <div className="flex flex-col items-center mt-0">
          <SideIcons className="w-full h-16 " />
        </div>
        <div className="flex items-center gap-4 w-full">
          <div className="flex flex-col w-full m-4">
            <ProfileCardStranger
              user={{
                name: OtherUser.userDetails,
                location: "New Delhi, India",
                friends: 20,
                strangersMet: 25,
              }}
            />
            <div className="flex flex-col items-center mt-6 p-4 bg-[#C7C7C7] rounded-lg border border-[#000000]">
              <div className="flex justify-around  gap-2">
                {/* <Button variant="primary" size="icon" className="rounded-full">
                  <CheckIcon className="h-5 w-5" />
                  <span className="sr-only">Check</span>
                </Button> */}
                <Button variant="secondary" size="icon" className="rounded-full" onClick={addFriend}>
                  <UserPlusIcon className="h-5 w-5" />
                  <span className="sr-only" >Add Friend</span>
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <BanIcon className="h-5 w-5" />
                  <span className="sr-only">Ban</span>
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <AtSignIcon className="h-5 w-5" />
                  <span className="sr-only">At Sign</span>
                </Button>
              </div>
            </div>
            {
              connectPopup && (

            <div className="flex flex-col items-center mt-6 p-4 bg-[#C7C7C7] rounded-lg border border-[#000000]">
              <p className="text-center text-sm text-black">
                Anonymous wants to connect with you
              </p>
              <div className="w-full flex justify-around  gap-2">
                <Button variant="primary" size="icon" className="rounded-full" onClick={acceptFriend}>
                  <CheckIcon className="h-5 w-5" />
                  <span className="sr-only">Check</span>
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Cross1Icon className="h-5 w-5" />
                  <span className="sr-only">Cross</span>
                </Button>
              </div>
            </div>
            )}
          </div>
        </div>
        <div className="aspect-video w-full rounded-lg bg-muted " />

        <div className="flex flex-col w-full items-center gap-4 absolute bottom-4">
          <Button className="w-5/6 border-primary" onClick={findUser}>
            Find User
          </Button>
          <Button className="w-5/6 border-primary" onClick={disconnectSelf}>
            Disconnect
          </Button>
        </div>
      </div>
    );
  };

function BlocksIcon(props) {
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
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
    </svg>
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   );
// }

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
