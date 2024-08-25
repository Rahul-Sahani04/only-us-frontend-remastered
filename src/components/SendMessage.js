import React from "react";
import "../css/sendMessage.css";

import { Button, Divider, Flex, Radio, Space, Tooltip } from "antd";
import { SendOutlined } from "@ant-design/icons";

const SendMessage = () => {
  return (
    <div>
      <div className="input-group mb-3">
        <div className="input-group-prepend"></div>
        <div className="input-group-text">
          <input
            type="text"
            className="form-control"
            placeholder="Type to send Message"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ width: "100%" }}
          />
          <Button
            type="dashed"
            // shape="circle"
            size="large"

            icon={<SendOutlined style={{
                fontSize: "16px",
                textAlign: "center",
                
            }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
