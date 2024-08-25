import React, { useState } from "react";
import "../css/friendList.css";
import Avvvatars from "avvvatars-react";
const FriendList = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="FriendList_grandfather_container">
      <div
        className="FriendList_container"
        id="FriendList-topPart"
        style={{
          height: isExpanded ? "70vh" : "7vh",
          transition: "height 0.3s ease",
        }}
        onClick={toggleHeight}
      >
        <div className="FriendList-topPart" >
          <div className="ml-2">
            <Avvvatars value="SE" size={30} />
          </div>
          <div className="ml-2">Messages</div>
        </div>
        <div className="FriendList_listFriends"></div>
      </div>
    </div>
  );
};

export default FriendList;
