import React from "react";
import SideDrawer from "../components/SideDrawer";
import ChatComponent from "../components/ChatComponent";
import FriendList from "../components/FriendList";
const Home = () => {
  return (
    <div>
      <div className="row" style={{width:"100vw"}}>
        <div className="col-3">
          <SideDrawer />
        </div>
        <div style={{
            width: "50%",
        }}>
          <ChatComponent />
        </div>
        <div className="col ">
          <FriendList/>
      </div>
      </div>
    </div>
  );
};
export default Home;
