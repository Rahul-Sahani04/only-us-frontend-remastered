/**
 * v0 by Vercel.
 * @see https://v0.dev/t/T9YWTh04tug
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="flex h-screen bg-[#1a1a1a] text-gray-100">
      <div className="flex flex-col w-1/4 p-4 bg-[#262626]">
        <div className="flex flex-col items-center p-4 bg-[#333333] rounded-lg">
          <div className="w-24 h-24 bg-[#404040] rounded-full" />
          <h2 className="mt-4 text-xl font-bold">Me</h2>
          <p className="text-[#b3b3b3]">myemail@wow.com</p>
          <div className="flex justify-between w-full mt-4">
            <div className="text-center">
              <p className="text-lg font-bold">68</p>
              <p className="text-[#b3b3b3]">Friends</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">125</p>
              <p className="text-[#b3b3b3]">Strangers Met</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-bold">Recent Chat Sessions</h3>
          <div className="mt-2 space-y-2">
            <div className="p-2 bg-[#333333] rounded-lg">AlongTheEdge</div>
            <div className="p-2 bg-[#333333] rounded-lg">
              MeraUsernameNahiHai
            </div>
            <div className="p-2 bg-[#333333] rounded-lg">User123</div>
          </div>
        </div>
        <div className="mt-auto">
          <button className="flex items-center justify-center w-full p-4 mt-6 bg-[#333333] rounded-lg">
            <StarIcon className="w-6 h-6 mr-2" />
            Premium
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4 bg-[#333333]">
        <div className="p-4 bg-[#404040] rounded-lg">
          You are chatting with an anonymous person. Be careful chatting with
          strangers online. Don't share personal stuff, or passwords.
        </div>
        <div className="flex-1 mt-4 space-y-4 overflow-y-auto">
          <div className="w-3/4 p-4 bg-[#404040] rounded-lg" />
          <div className="w-1/2 p-4 ml-auto bg-[#404040] rounded-lg" />
          <div className="w-2/3 p-4 bg-[#404040] rounded-lg" />
          <div className="w-1/3 p-4 ml-auto bg-[#404040] rounded-lg" />
          <div className="w-1/2 p-4 bg-q[#404040] rounded-lg" />
        </div>
        <div className="flex items-center p-4 mt-4 bg-[#262626] rounded-lg">
          <input
            type="text"
            placeholder="Send Message..."
            className="flex-1 p-2 bg-[#333333] rounded-lg"
          />
          <SendIcon className="w-6 h-6 ml-4" />
          <SmileIcon className="w-6 h-6 ml-4" />
        </div>
      </div>
      <div className="flex flex-col w-1/4 p-4 bg-[#262626]">
        <div className="flex flex-col items-center p-4 bg-[#333333] rounded-lg">
          <div className="w-24 h-24 bg-[#404040] rounded-full" />
          <h2 className="mt-4 text-xl font-bold">Anonymous</h2>
          <p className="text-[#b3b3b3]">📍 New Delhi, India</p>
          <div className="flex justify-between w-full mt-4">
            <div className="text-center">
              <p className="text-lg font-bold">NA</p>
              <p className="text-[#b3b3b3]">Friends</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">NA</p>
              <p className="text-[#b3b3b3]">Strangers Met</p>
            </div>
          </div>
        </div>
        <div className="flex justify-around mt-6">
          <CheckIcon className="w-6 h-6" />
          <UserPlusIcon className="w-6 h-6" />
          <BanIcon className="w-6 h-6" />
          <AtSignIcon className="w-6 h-6" />
        </div>
        <div className="mt-auto space-y-4">
          <button className="w-full p-4 bg-[#333333] rounded-lg">Block</button>
          <button className="w-full p-4 bg-[#333333] rounded-lg">Report</button>
        </div>
      </div>
    </div>
  );
}
