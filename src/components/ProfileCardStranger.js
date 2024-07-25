import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../raw_components/shacn_raw_card";

import { BiMapPin } from "react-icons/bi";

const ProfileCardStranger = ({ user }) => {
  return (
    <CardHeader className="bg-muted/20 p-0 w-full">
      <div className=" flex flex-col items-center p-4 bg-[#C7C7C7] text-black rounded-lg border border-[#000000]">
        <div className="w-32 h-32 bg-[#404040] rounded-full" />
        <h2 className="mt-4 text-xl font-bold ">{user.name}</h2>
        <p className="">
          <BiMapPin className="inline-block w-4 h-4 " /> {user.location}
        </p>
        <div className="flex justify-between items-center w-full mt-6 p-2 pr-6 pl-6 relative">
          <div className="text-center">
            <p className="text-sm font-bold ">{user.friends}</p>
            <p className="text-xs w-full">Friends</p>
          </div>
          <hr className="absolute top-0 left-1/2 rotate-90 w-full text-black bg-black h-[3px] -scale-x-50 text-center"/>
          <hr className="absolute top-0 right-1/2 rotate-90 w-full text-black bg-black h-[3px] -scale-x-50 text-center"/>
          <div className="text-center ">
            <p className="text-sm font-bold ">{user.strangersMet}</p>
            <p className="text-xs w-full">Strangers Met</p>
          </div>
        </div>
      </div>
    </CardHeader>
  );
};

export default ProfileCardStranger;
