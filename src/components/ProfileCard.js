import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../raw_components/shacn_raw_card";

const ProfileCard = ({ user }) => {
  return (
      <CardHeader className="bg-muted/20 p-6">
        <div className="flex flex-col items-center p-4 bg-[#C7C7C7] rounded-lg border border-[#000000]">
          <div className="w-32 h-32 bg-[#404040] rounded-full" />
          <h2 className="mt-4 text-xl font-bold ">{user.name}</h2>
          <p className="">{user.email}</p>
          <div className="flex justify-between w-full mt-6 p-2 pr-6 pl-6 relative">
            <div className="text-center">
              <p className="text-md font-bold">{user.friends}</p>
              <p className="text-xs">Friends</p>
            </div>
            <hr className="absolute top-0 left-1/2 rotate-90 w-full text-black bg-black h-[3px] -scale-x-50 text-center"/>
          <hr className="absolute top-0 right-1/2 rotate-90 w-full text-black bg-black h-[3px] -scale-x-50 text-center"/>
            <div className="text-center">
              <p className="text-md font-bold ">{user.strangersMet}</p>
              <p className="text-xs">Strangers Met</p>
            </div>
          </div>
        </div>
      </CardHeader>
  );
};

export default ProfileCard;
